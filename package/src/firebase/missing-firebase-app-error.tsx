export class MissingFirebaseAppError extends Error {
  constructor() {
    super(
      'Firebase app not defined. Please pass an initialized Firebase app through a <FirebaseCommentsProvider /> surrounding this call.'
    );

    this.name = 'MissingFirebaseAppError';
  }
}
