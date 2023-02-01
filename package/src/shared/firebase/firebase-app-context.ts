import { FirebaseApp } from 'firebase/app';
import { createContext } from 'react';

type FirebaseAppContextValue = {
  app?: FirebaseApp;
};

export const FirebaseAppContext = createContext<FirebaseAppContextValue>({
  app: undefined,
});
