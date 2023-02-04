import { useComments } from '@headless-comments/react';

export function Comments() {
  const { comments } = useComments('blogtest1');

  return (
    <ul>
      {comments.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
}
