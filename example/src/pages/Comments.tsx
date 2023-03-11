import { useAddComment, useComments } from '@headless-comments/react';
import { FormEvent, useState } from 'react';

export function Comments() {
  const { comments, loading } = useComments();
  const {
    addComment,
    loading: addingComment,
    error: addCommentError,
  } = useAddComment();

  const [content, setContent] = useState('');

  const handleAddComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addComment({ text: content });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <section>
      <form onSubmit={handleAddComment}>
        <label htmlFor="content">Content:</label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>Comment</button>
        {addingComment && <div>adding comment...</div>}
        {addCommentError && <div>{addCommentError.message}</div>}
      </form>
      <ul>
        {comments.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </section>
  );
}
