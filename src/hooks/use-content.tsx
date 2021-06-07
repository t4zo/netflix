import { useCallback, useContext, useEffect, useState } from 'react';
import FirebaseContext from 'contexts/firebaseContext';
import { getCollection } from 'services/firebase';

export default function useContent(collectionName: string) {
  const [content, setContent] = useState<any>([]);
  const { firebase } = useContext(FirebaseContext);

  const getCollectionCallback = useCallback(async () => {
    try {
      const content = await getCollection(collectionName);
      setContent(content);
    } catch (error) {
      console.error(error.message);
    }
  }, [collectionName]);

  useEffect(() => {
    getCollectionCallback();
  }, [getCollectionCallback]);

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