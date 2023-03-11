import { getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useCommentsDataContext } from './comments-data-context';
import { useFirebaseAppContext } from './firebase';
import { getComments } from './firebase/firebase-service';
import { MissingFirebaseAppError } from './firebase/missing-firebase-app-error';

export const useComments = () => {
  const { contentId, commentsData, setCommentsData } = useCommentsDataContext();

  const { app } = useFirebaseAppContext();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (!app) {
      setError(new MissingFirebaseAppError());
      setLoading(false);
      return;
    }

    getComments(getFirestore(app), contentId)
      .then((commentsData) => setCommentsData(commentsData))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [app, contentId]);

  return {
    comments: commentsData,
    loading,
    error,
  };
};
