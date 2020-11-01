import firebase from './utils/Firebase'
import 'firebase/auth'

function App() {

  firebase.auth().onAuthStateChanged(currentUser => {
    console.log(currentUser ? 'Estamos Logados' : 'Não Estamos Logados' )
  })

  return (
    <div>
     <h1>App Electron + React</h1>
    </div>
  );
}

export default App;
