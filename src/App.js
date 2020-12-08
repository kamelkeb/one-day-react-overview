import "./App.css";
import Compteur from "./Components/Compteur/Compteur";
import utilisateur, { users as utilisateurs } from "./mock";
import { useState } from "react";
import PseudoForm from "./Components/PseudoForm/PseudoForm";

function App() {
  const [nouveauNom, setNouveauNom] = useState(utilisateur.name);
  return (
    <div className="App">
      <header className="App-header">
        <p>Bonjour {utilisateur.name}!!</p>
        <p>Il y a {utilisateurs.length} utilisateurs en cours.</p>
        <Compteur></Compteur>
        <PseudoForm
          initialName={nouveauNom}
          onNewNameHandler={setNouveauNom}
        ></PseudoForm>
        <p>Parfait! Votre nouveau nom est: {nouveauNom}</p>
        <h3>La liste de mes amis imaginaires:</h3>
        {utilisateurs.map((elem, index) => (
          <div key={index}>
            {elem.name}, qui a {elem.age} années d'age mental.
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
