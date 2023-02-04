import { useCommentsDataContext } from './comments-data-context';
import { NewComment } from './comment';

export const useAddComment = () => {
  const { addComment: addCommentState } = useCommentsDataContext();

  const addComment = async (contentId: string, newComment: NewComment) => {
    // Add comment to Firestore
    const createdComment = {
      ...newComment,
      id: '1',
    };

    addCommentState(contentId, createdComment);
  };

  return {
    addComment,
  };
};
