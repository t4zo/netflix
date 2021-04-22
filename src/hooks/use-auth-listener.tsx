import { FirebaseContext } from 'contexts/firebaseContext'
import { useState, useEffect, useContext } from 'react'

export default function UseAuthListener() {
  const [user, setUser] = useState<any>();
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if(authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser)
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    })

    return () => listener();
  }, [])

  return { user }
}
