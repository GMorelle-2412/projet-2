import './App.css';
import react from 'react';

const Formulaire = () => {
  return(
    <div id="Formulaire">
      <h3>Formulaire de connexion</h3>

      <p>Nom</p>
      <input></input>

      <p>Mot de passe</p>
      <input></input>

      <p>Mail</p>
      <input></input>

      <button>Envoi</button>
    </div>
  );
};

export default Formulaire;