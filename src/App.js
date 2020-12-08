import "./App.css";
import CoolButton from "./Components/CoolButton/CoolButton";
import utilisateur, { users as utilisateurs } from "./mock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Bonjour {utilisateur.name}!!</p>
        <p>Il y a {utilisateurs.length} utilisateurs en cours.</p>
        <CoolButton
          clickHandler={() => alert("YAY!!!")}
          actionName="Faites le!"
        ></CoolButton>
      </header>
    </div>
  );
}

export default App;
