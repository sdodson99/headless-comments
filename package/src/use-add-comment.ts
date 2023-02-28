import { useCommentsDataContext } from './comments-data-context';
import { NewComment } from './comment';
import { useFirebaseAppContext } from './firebase';
import * as firebase from './firebase/firebase-service';
import { getFirestore } from 'firebase/firestore';

export const useAddComment = () => {
  const { contentId, addCommentData } = useCommentsDataContext();

  const { app } = useFirebaseAppContext();

  const addComment = async (newComment: NewComment) => {
    if (!app) {
      throw new Error('Firebase app not provided');
    }

    const comment = await firebase.addComment(
      getFirestore(app),
      contentId,
      newComment
    );

    addCommentData(comment);
  };

  return {
    addComment,
  };
};
