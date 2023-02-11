import { getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useCommentsDataContext } from './comments-data-context';
import { useFirebaseAppContext } from './firebase';
import { getComments } from './firebase/firebase-service';

export const useComments = () => {
  const { contentId, comments, setComments } = useCommentsDataContext();

  const { app } = useFirebaseAppContext();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (app) {
      getComments(getFirestore(app), contentId)
        .then((commentsData) => setComments(commentsData))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [app, contentId]);

  return {
    comments,
    loading,
    error,
  };
};
