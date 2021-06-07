import { getFirebaseInstance } from "libs/firebase";

const firebase = getFirebaseInstance();

export async function getCollection(collectionName: string) {
  const snapshot = await firebase.firestore().collection(collectionName).get();
  const content = snapshot.docs.map(document => ({
    ...document.data(),
    id: document.id,
  }));

  return content;
}

