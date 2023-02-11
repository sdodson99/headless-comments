import { renderHook } from '@testing-library/react';
import { FirebaseApp } from 'firebase/app';
import {
  useFirebaseAppContext,
  FirebaseAppProvider,
} from './firebase-app-context';

describe('useFirebaseAppContext', () => {
  it('provides Firebase app instance', () => {
    const expectedApp = {} as FirebaseApp;
    const { result } = renderHook(() => useFirebaseAppContext(), {
      wrapper: ({ children }) => (
        <FirebaseAppProvider app={expectedApp}>{children}</FirebaseAppProvider>
      ),
    });

    const app = result.current.app;

    expect(app).toBe(expectedApp);
  });
});
