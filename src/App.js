import React, { useState } from 'react';

import firebase from './utils/Firebase';
import 'firebase/auth';

import Auth from './pages/Auth';

function App() {
  const [ user, setUser ] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged(currentUser => {
    if(!currentUser) {
      setUser(null)
    } else {
      setUser(currentUser)
    }
    setIsLoading(false)
  })

  if (isLoading) {
    return null;
  }

  return (
    !user ? <Auth /> : <UserLogged />
  );
}

function UserLogged() {
  const logout = () => {
    firebase.auth().signOut();
  }

  return (
    <div 
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}>
        <h1>Usuário Logado</h1>
        <button onClick={logout}>Sair</button>
      </div>
  )
}

export default App;
