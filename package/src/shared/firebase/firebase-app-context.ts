import { FirebaseApp } from 'firebase/app';
import { createContext } from 'react';
import { Comment } from '../../comment';

type FirebaseAppContextValue = {
  app?: FirebaseApp;
  comments: Comment[];
};

export const FirebaseAppContext = createContext<FirebaseAppContextValue>({
  app: undefined,
  comments: [],
});
