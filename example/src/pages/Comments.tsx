import { useFirebaseAppContext } from '@headless-comments/react';

export function Comments() {
  const { comments } = useFirebaseAppContext();

  return (
    <ul>
      {comments.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
}
