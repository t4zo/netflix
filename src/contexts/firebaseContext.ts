import { createContext } from 'react';
import { getFirebaseInstance } from 'libs/firebase';

export const FirebaseContext = createContext({ firebase: getFirebaseInstance() });
