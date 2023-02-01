import { PropsWithChildren, useEffect, useState } from 'react';
import { FirebaseAppContext } from './firebase-app-context';
import { FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getComments } from './firebase-service';
import { Comment } from '../../comment';

type FirebaseAppProviderProps = PropsWithChildren<{
  app: FirebaseApp;
  id: string;
}>;

export function FirebaseAppProvider({
  children,
  app,
  id,
}: FirebaseAppProviderProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  
  useEffect(() => {
    getComments(getFirestore(app), id).then(setComments)
  }, [app, id])

  return (
    <FirebaseAppContext.Provider value={{ app, comments }}>
      {children}
    </FirebaseAppContext.Provider>
  );
}
