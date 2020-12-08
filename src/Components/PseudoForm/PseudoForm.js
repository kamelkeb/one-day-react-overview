import { Fragment } from "react";

function PseudoForm({ initialName, onNewNameHandler }) {
  return (
    <Fragment>
      <p>Veuillez saisir votre nouveau nom:</p>
      <input
        type="text"
        value={initialName}
        onChange={(event) => onNewNameHandler(event.target.value)}
      ></input>
    </Fragment>
  );
}

export default PseudoForm;
