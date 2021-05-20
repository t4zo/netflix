import { createContext, ReactNode } from 'react';
import { getFirebaseInstance } from 'libs/firebase';

const firebaseInstance = getFirebaseInstance();

const FirebaseContext = createContext({ firebase: firebaseInstance });

interface Props {
  children: ReactNode;
}

export function FirebaseContextProvider({ children }: Props) {
  return <FirebaseContext.Provider value={{ firebase: firebaseInstance }}>{children}</FirebaseContext.Provider>;
}

export default FirebaseContext;
