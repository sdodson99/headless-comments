import { collection, getDocs, Firestore, addDoc } from 'firebase/firestore';
import { Comment, NewComment } from '../comment';

const HEADLESS_COMMENTS_ROOT_KEY = 'headless-comments';
const COMMENTS_COLLECTION_KEY = 'comments';

export async function getComments(db: Firestore, contentId: string) {
  const ref = collection(
    db,
    HEADLESS_COMMENTS_ROOT_KEY,
    contentId,
    COMMENTS_COLLECTION_KEY
  );
  const snapshot = await getDocs(ref);

  return snapshot.docs.map((doc) => {
    const { text } = doc.data();

    return {
      id: doc.id,
      text,
    };
  });
}

export async function addComment(
  db: Firestore,
  contentId: string,
  newComment: NewComment
): Promise<Comment> {
  const commentsCollection = collection(
    db,
    HEADLESS_COMMENTS_ROOT_KEY,
    contentId,
    COMMENTS_COLLECTION_KEY
  );

  const { id } = await addDoc(commentsCollection, newComment);

  return {
    ...newComment,
    id,
  };
}
