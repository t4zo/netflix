import FirebaseContext from 'contexts/firebaseContext';
import { useContext, useEffect, useState } from 'react';

export default function useContent(target: string) {
  const [content, setContent] = useState<any>([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    async function fetchContent() {
      try {
        const snapshot = await firebase.firestore().collection(target).get();
        const content = snapshot.docs.map((c) => ({
          ...c.data(),
          id: c.id,
        }));

        setContent(content);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchContent();
  }, [target]);

  // return { [target]: content };
  return content;
}
