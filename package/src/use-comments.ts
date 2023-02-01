import { getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Comment } from './comment';
import { useFirebaseAppContext } from './firebase';
import { getComments } from './firebase/firebase-service';

export const useComments = (id: string) => {
  const { app } = useFirebaseAppContext();
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (app) {
      getComments(getFirestore(app), id).then(setComments);
    }
  }, [app, id]);

  return comments;
};
