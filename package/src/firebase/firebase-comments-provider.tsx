import { FirebaseApp } from 'firebase/app';
import { PropsWithChildren } from 'react';
import { CommentsDataProvider } from '../comments-data-context';
import { FirebaseAppProvider } from './firebase-app-context';

type FirebaseCommentsProviderType = PropsWithChildren<{
  contentId: string;
  firebaseApp: FirebaseApp;
}>;

export function FirebaseCommentsProvider({
  children,
  contentId,
  firebaseApp,
}: FirebaseCommentsProviderType) {
  return (
    <FirebaseAppProvider app={firebaseApp}>
      <CommentsDataProvider contentId={contentId}>
        {children}
      </CommentsDataProvider>
    </FirebaseAppProvider>
  );
}
