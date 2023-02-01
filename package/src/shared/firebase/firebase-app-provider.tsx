import { PropsWithChildren } from 'react';
import { FirebaseAppContext } from './firebase-app-context';
import { FirebaseApp } from 'firebase/app';

type FirebaseAppProviderProps = PropsWithChildren<{
  app: FirebaseApp;
}>;

export function FirebaseAppProvider({
  children,
  app,
}: FirebaseAppProviderProps) {
  return (
    <FirebaseAppContext.Provider value={{ app }}>
      {children}
    </FirebaseAppContext.Provider>
  );
}
