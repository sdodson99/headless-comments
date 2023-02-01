import { collection, getDocs, Firestore } from 'firebase/firestore';

export async function getComments(db: Firestore, id: string) {
  const ref = collection(db, 'headless-comments', id, 'comments');
  const snapshot = await getDocs(ref);

  return snapshot.docs.map((doc) => {
    const { text } = doc.data();

    return {
      id: doc.id,
      text,
    };
  });
}
