import { getFirestore } from 'firebase/firestore';
import { useEffect } from 'react';
import { useCommentsDataContext } from './comments-data-context';
import { useFirebaseAppContext } from './firebase';
import { getComments } from './firebase/firebase-service';

export const useComments = (id: string) => {
  const { getComments: getCommentsState, setComments: setCommentsState } =
    useCommentsDataContext();
  const { app } = useFirebaseAppContext();

  useEffect(() => {
    if (app) {
      getComments(getFirestore(app), id).then((comments) =>
        setCommentsState(id, comments)
      );
    }
  }, [app, id]);

  return {
    comments: getCommentsState(id),
  };
};
