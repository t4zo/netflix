// import dynamic from 'next/dynamic';
import { seedDatabase } from '../seed';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// const firebase = dynamic(() => import('firebase/app'));
// dynamic(() => import('firebase/auth'));
// dynamic(() => import('firebase/firestore'));

seedDatabase();

export function getFirebaseInstance() {
  if (!firebase.apps.length) {
    // const {
    //   NEXT_PUBLIC_apiKey,
    //   NEXT_PUBLIC_authDomain,
    //   // NEXT_PUBLIC_databaseURL,
    //   NEXT_PUBLIC_projectId,
    //   NEXT_PUBLIC_storageBucket,
    //   NEXT_PUBLIC_messagingSenderId,
    //   NEXT_PUBLIC_appId
    // } = process.env;

    // var config = {
    //   apiKey: NEXT_PUBLIC_apiKey,
    //   authDomain: NEXT_PUBLIC_authDomain,
    //   // databaseURL: NEXT_PUBLIC_databaseURL,
    //   projectId: NEXT_PUBLIC_projectId,
    //   storageBucket: NEXT_PUBLIC_storageBucket,
    //   messagingSenderId: NEXT_PUBLIC_messagingSenderId,
    //   appId: NEXT_PUBLIC_appId
    // };

    const config = {
      apiKey: 'AIzaSyDPoC5TzxgV1_l7hRff-i4LeXOGeBweFr0',
      authDomain: 'netflix-f8412.firebaseapp.com',
      projectId: 'netflix-f8412',
      storageBucket: 'netflix-f8412.appspot.com',
      messagingSenderId: '815157932657',
      appId: '1:815157932657:web:e2ac22e5ba9ef845c6a1d0',
    };

    return firebase.initializeApp(config);
  }

  return firebase.app();
}
