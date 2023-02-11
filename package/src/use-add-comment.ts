import { useCommentsDataContext } from './comments-data-context';
import { NewComment } from './comment';

export const useAddComment = () => {
  const { addComment: addCommentState } = useCommentsDataContext();

  const addComment = async (newComment: NewComment) => {
    // Add comment to Firestore
    const createdComment = {
      ...newComment,
      id: '1',
    };

    addCommentState(createdComment);
  };

  return {
    addComment,
  };
};
