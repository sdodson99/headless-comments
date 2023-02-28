import { useAddComment, useComments } from '@headless-comments/react';
import { FormEvent, useState } from 'react';

export function Comments() {
  const { comments, loading } = useComments();
  const { addComment } = useAddComment();

  const [content, setContent] = useState('');
  const [addingComment, setAddingComment] = useState(false);
  const [hasAddCommentError, setHasAddCommentError] = useState(false);

  if (loading) {
    return <div>loading...</div>;
  }

  const handleAddComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAddingComment(true);
    setHasAddCommentError(false);

    try {
      await addComment({ text: content });
    } catch (err) {
      console.error(err);
      setHasAddCommentError(true);
    } finally {
      setAddingComment(false);
    }
  };

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
        {hasAddCommentError && <div>failed to add comment</div>}
      </form>
      <ul>
        {comments.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </section>
  );
}
