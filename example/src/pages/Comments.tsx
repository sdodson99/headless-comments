import { useComments } from '@headless-comments/react';

export function Comments() {
  const { comments, loading } = useComments();

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <ul>
      {comments.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
}
