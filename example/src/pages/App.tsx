import { FirebaseCommentsProvider } from '@headless-comments/react';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { useEffect, useState } from 'react';
import { Comments } from './Comments';

const firebaseConfig = {
  apiKey: 'AIzaSyBodk8ikf-7YMK9q8a0JSVffq2qT1tnmks',
  authDomain: 'headless-comments.firebaseapp.com',
  projectId: 'headless-comments',
  storageBucket: 'headless-comments.appspot.com',
  messagingSenderId: '67585686815',
  appId: '1:67585686815:web:be4228a2a12d02d483842a',
};

export function App() {
  const [firebaseApp, setFirebaseApp] = useState<FirebaseApp>();

  useEffect(() => {
    const app = initializeApp(firebaseConfig);

    setFirebaseApp(app);
  }, []);

  if (!firebaseApp) {
    return null;
  }

  return (
    <main>
      <h1>Headless Comments</h1>
      <FirebaseCommentsProvider
        contentId={'blogtest1'}
        firebaseApp={firebaseApp}
      >
        <h2>Blog Test 1</h2>
        <Comments />
      </FirebaseCommentsProvider>
      <FirebaseCommentsProvider
        contentId={'blogtest2'}
        firebaseApp={firebaseApp}
      >
        <h2>Blog Test 2</h2>
        <Comments />
      </FirebaseCommentsProvider>
    </main>
  );
}
