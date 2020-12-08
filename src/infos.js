/*
Pour créer une app react:
    npx create-react-app monapp
Puis pour lancer le serveur de dev:
entrer dans le dossier racine de l'app (ici monapp) puis:
    npm start
Pour arrêter le serveur de dev
    ctrl+C
Pour effectuer un build:
    npm run build
*/

/*
IMPORTS PAR DEFAUT
Parmi les choses que l'on peut importer pour les rendre disponibles/accessibles
1- Style global: (spécifique react)
Comme avec
import "./App.css";

En important directement un fichier css, on applique ses styles sur toute
notre app, c'est comme si on l'importait dans le fichier html de façon
classique.

2- Logo ou graphique svg: (spécifique react)
Comme avec
import logo from "./logo.svg"

On nomme ce qu'on importe d'un fichier svg du nom qui nous convient,
puis pour l'utiliser dans l'app, il suffira de passer ce nom (ici 'logo')
à l'attribut src d'une balise <img>. Comme dans:
<img src={logo} className="App-logo" alt="logo" />
Remarquons que du fait qu'on attribue le nom d'un 'truc' JS à un attribut
dans le JSX, on doit mettre ce nom entre accolades.

3- Import par défault d'une librairie: (module ES6)
Comme dans
import React from 'react';

On a importé, ce qui a été exporté par défaut par la librairie 'react'
Lorsqu'on importe quelque chose d'une librairie il faut l'avoir installé
au préalable!!

Remarque: Pour installer une librairie: npm install nom-librairie
Comme dans
npm install react-router-dom
(qui est une librairie de routing pour react)

4- Import par défault d'un composant défini dans notre projet: (ES6)
Comme dans
import App from './App';

On a importé ce qui a été exporté dans le fichier accessible avec le
chemin './App'
Remarquez qu'on a pas mis le '.js' ici alors qu'on le fait pour le CSS
et SVG.
Remarquer que le nom du composant commence par une majuscule.

5- Importer par défaut une fonction, ou une variable const d'un fichier local:
Comme dans
import reportWebVitals from './reportWebVitals';

Il faut que la fonction ou la const ait été exporté par défaut.
Attention: les imports toujours en haut du fichier
*/

/*
EXPORTS PAR DEFAUT:

Dans un fichier, on ne peut avoir qu'un seul export par défaut,
deux façons d'exporter par défaut:
1- Je dispose déja d'une variable/fonction qui a un nom
export default user;


2- Je veux exporter une valeur à sacréation directement, de façon anonyme
(mon ESlint déconseille, mais ça fait partie de la norme et c'est commun
de trouver du code qui le fait)
export default function () {console.log("la fonction anonyme s'est bien exécuté")}


à l'import, quelque soit le nom importé, c'est ce qui a été
exporté par défaut qui sera assigné à ce nom la
par exemple
import utilisateur from "./mock"
*/

/*
Exports nommés (ES6)

À la déclaration de la variable ou fonction, comme dans:
export const user = {
  name: "Michu",
  age: 27,
};

*/
/*
IMPORTS NOMMéS

import { users } from "./mock";
Le nom doit être entre accolades!

On pourr donner un alias, comme dans:
import { users as utilisateurs } from "./mock";

Remarque: on peut vouloir importer plusieurs choses d'un même module (fichier
    ou librairie installée), et on peut le faire simplement:

import utilisateur, { users as utilisateurs, colors } from "./mock";

*/

/*
Styles:
1- styles globaux:
il suffit d'importer un fichier css tel quel, cf début de ce cours

2- Modules css:
Permet d'avoir un style local à un composant.
fichier d'extention .module.css , à mettre dans le même dossier que
le fichier JS définissant le composant.
Puis import des noms de classes dans le fichier définissant le composant
import classes from "./CoolButton.module.css";

Et application de la classe voulue à la balise choisie:
<button className={classes.cool}/>

On a la garantie que dans l'html généré, ce nom de classe sera modifié
en une string unique

rappel: le mot class étant un mot réservé en JS, en JSX en utilisera
className pour désigner ce qui correspond à l'attribut class en html.



*/

/*
PROPS
Comment passer des infos de parent à enfant:

Comme attributs lorsqu'on utilise le composant dans du JSX, le parent
peut passer de l'info.
Le composant enfant, dans son corps, pour y accéder, accédera au
champ portant le même nom que l'attribut passé par le parent
de l'objet (props) passé en argument à ma fonction composant par react.

Le passage de données de parent à enfant passe par les props.
*/
