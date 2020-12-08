import "./App.css";
import Compteur from "./Components/Compteur/Compteur";
import utilisateur, { users as utilisateurs } from "./mock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Bonjour {utilisateur.name}!!</p>
        <p>Il y a {utilisateurs.length} utilisateurs en cours.</p>
        <Compteur></Compteur>

        <input type="text"></input>
      </header>
    </div>
  );
}

export default App;
