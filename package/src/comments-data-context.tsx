import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Comment } from './comment';

type CommentsDataContextProps = {
  contentId: string;
  commentsData: Comment[];
  setCommentsData: (comments: Comment[]) => void;
  addCommentData: (comment: Comment) => void;
};

const CommentsDataContext = createContext<CommentsDataContextProps>({
  contentId: '',
  commentsData: [],
  setCommentsData: () => {},
  addCommentData: () => {},
});

export const useCommentsDataContext = () => useContext(CommentsDataContext);

type CommentsDataProviderProps = PropsWithChildren<{
  contentId: string;
}>;

export const CommentsDataProvider = ({
  children,
  contentId,
}: CommentsDataProviderProps) => {
  const [commentsState, setCommentsState] = useState<Comment[]>([]);

  const setCommentsData = (comments: Comment[]) => setCommentsState(comments);

  const addCommentData = (comment: Comment) =>
    setCommentsState((currentCommentsState) => [
      ...currentCommentsState,
      comment,
    ]);

  return (
    <CommentsDataContext.Provider
      value={{
        contentId,
        commentsData: commentsState,
        setCommentsData,
        addCommentData,
      }}
    >
      {children}
    </CommentsDataContext.Provider>
  );
};
