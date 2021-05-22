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

  useEffect(() => {
    async function fetchFirebaseDependencies() {
      if (!firebase.auth) {
        await import('firebase/auth');
      }

      if (!firebase.firestore) {
        await import('firebase/firestore');
      }
    }

    fetchFirebaseDependencies();
  }, []);

  // return { [target]: content };
  return content;
}
