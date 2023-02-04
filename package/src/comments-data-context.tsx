import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Comment } from './comment';

type CommentsDataContextProps = {
  getComments: (contentId: string) => Comment[];
  setComments: (contentId: string, comments: Comment[]) => void;
  addComment: (contentId: string, comment: Comment) => void;
};

const CommentsDataContext = createContext<CommentsDataContextProps>({
  getComments: () => [],
  setComments: () => {},
  addComment: () => {},
});

export const useCommentsDataContext = () => useContext(CommentsDataContext);

type CommentsDataProviderProps = PropsWithChildren<{}>;

type ContentToCommentsMap = {
  [contentId: string]: Comment[];
};

export const CommentsDataProvider = ({
  children,
}: CommentsDataProviderProps) => {
  const [commentsMap, setCommentsMap] = useState<ContentToCommentsMap>({});

  const getComments = (contentId: string) => commentsMap[contentId] ?? [];

  const setComments = (contentId: string, comments: Comment[]) => {
    setCommentsMap((previous) => ({
      ...previous,
      [contentId]: comments,
    }));
  };

  const addComment = (contentId: string, comment: Comment) => {
    setCommentsMap((previous) => ({
      ...previous,
      [contentId]: [...previous[contentId], comment],
    }));
  };

  return (
    <CommentsDataContext.Provider
      value={{
        getComments,
        setComments,
        addComment,
      }}
    >
      {children}
    </CommentsDataContext.Provider>
  );
};
