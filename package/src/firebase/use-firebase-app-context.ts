import { useContext } from 'react';
import { FirebaseAppContext } from './firebase-app-context';

export const useFirebaseAppContext = () => useContext(FirebaseAppContext);
