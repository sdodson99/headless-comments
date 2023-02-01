import { FirebaseApp } from 'firebase/app';
import { PropsWithChildren } from 'react';
import { FirebaseAppProvider } from './shared/firebase';

type CommentsProviderType = PropsWithChildren<{
  firebaseApp: FirebaseApp;
  id: string;
}>;

export function CommentsProvider({
  children,
  firebaseApp,
  id,
}: CommentsProviderType) {
  return (
    <FirebaseAppProvider app={firebaseApp} id={id}>{children}</FirebaseAppProvider>
  );
}
