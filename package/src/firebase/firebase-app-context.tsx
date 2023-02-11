import { FirebaseApp } from 'firebase/app';
import { createContext, PropsWithChildren, useContext } from 'react';

type FirebaseAppContextValue = {
  app?: FirebaseApp;
};

export const FirebaseAppContext = createContext<FirebaseAppContextValue>({
  app: undefined,
});

export const useFirebaseAppContext = () => useContext(FirebaseAppContext);

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
