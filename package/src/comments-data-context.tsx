import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Comment } from './comment';

type CommentsDataContextProps = {
  contentId: string;
  comments: Comment[];
  setComments: (comments: Comment[]) => void;
  addComment: (comment: Comment) => void;
};

const CommentsDataContext = createContext<CommentsDataContextProps>({
  contentId: '',
  comments: [],
  setComments: () => {},
  addComment: () => {},
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

  const setComments = (comments: Comment[]) => setCommentsState(comments);

  const addComment = (comment: Comment) =>
    setCommentsState((currentCommentsState) => [
      ...currentCommentsState,
      comment,
    ]);

  return (
    <CommentsDataContext.Provider
      value={{
        contentId,
        comments: commentsState,
        setComments,
        addComment,
      }}
    >
      {children}
    </CommentsDataContext.Provider>
  );
};
