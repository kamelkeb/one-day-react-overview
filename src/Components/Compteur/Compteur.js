import classes from "./Compteur.module.css";
import { useState } from "react";
import CoolButton from "../CoolButton/CoolButton";
import { Fragment } from "react";

const Compteur = () => {
  const [compteur, setCompteur] = useState(0);
  return (
    <Fragment>
      <CoolButton
        clickHandler={() => setCompteur(compteur + 1)}
        actionName="Incrémente"
      ></CoolButton>
      <CoolButton
        clickHandler={() => setCompteur(compteur - 1)}
        actionName="Décrémente"
      ></CoolButton>
      <p>Le compteur est à: {compteur}</p>
    </Fragment>
  );
};

export default Compteur;
