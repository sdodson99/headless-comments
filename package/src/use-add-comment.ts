import { useCommentsDataContext } from './comments-data-context';
import { NewComment } from './comment';

export const useAddComment = () => {
  const { addCommentData } = useCommentsDataContext();

  const addComment = async (newComment: NewComment) => {
    // Add comment to Firestore
    const createdComment = {
      ...newComment,
      id: '1',
    };

    addCommentData(createdComment);
  };

  return {
    addComment,
  };
};
