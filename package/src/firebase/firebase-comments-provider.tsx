import { FirebaseApp } from 'firebase/app';
import { PropsWithChildren } from 'react';
import { FirebaseAppProvider } from './firebase-app-provider';

type FirebaseCommentsProviderType = PropsWithChildren<{
  firebaseApp: FirebaseApp;
}>;

export function FirebaseCommentsProvider({
  children,
  firebaseApp,
}: FirebaseCommentsProviderType) {
  return (
    <FirebaseAppProvider app={firebaseApp}>{children}</FirebaseAppProvider>
  );
}
