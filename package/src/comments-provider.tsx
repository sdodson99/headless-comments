import { FirebaseApp } from 'firebase/app';
import { PropsWithChildren } from 'react';
import { FirebaseAppProvider } from './shared/firebase';

type CommentsProviderType = PropsWithChildren<{
  firebaseApp: FirebaseApp;
}>;

export function CommentsProvider({
  children,
  firebaseApp,
}: CommentsProviderType) {
  return (
    <FirebaseAppProvider app={firebaseApp}>{children}</FirebaseAppProvider>
  );
}
