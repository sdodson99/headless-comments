import { useState } from 'react';
import { useCommentsDataContext } from './comments-data-context';
import { NewComment } from './comment';
import { useFirebaseAppContext } from './firebase';
import * as firebase from './firebase/firebase-service';
import { getFirestore } from 'firebase/firestore';
import { MissingFirebaseAppError } from './firebase/missing-firebase-app-error';

export const useAddComment = () => {
  const { contentId, addCommentData } = useCommentsDataContext();

  const { app } = useFirebaseAppContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const addComment = async (newComment: NewComment) => {
    setLoading(true);
    setError(null);

    try {
      if (!app) {
        throw new MissingFirebaseAppError();
      }

      const comment = await firebase.addComment(
        getFirestore(app),
        contentId,
        newComment
      );

      addCommentData(comment);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error('Failed to add comment.'));
      }

      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    addComment,
    loading,
    error,
  };
};
