import PropTypes from 'prop-types';

export default function PageHeader({title, info}) {
  // cette opération est normalement interdite en react, car les "fonctions composants"
  // sont supposées être des fonctions pures, çàd qu'elles ne modifient pas la valeur 
  // des propriétés qu'on leur envoie en paramètre. 

  // Si vous voulez modifier certaines valeurs, alors utilisez les props comme valeurs
  // de démarrage et stockez les dans d'autres variables, internes à la fonction, 
  // dont vous pouvez changer la valeur.
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">{title}</p>
        <p className="eyebrow">{info.toto}</p>
        <p className="eyebrow">{info?.titi}</p>
      </div>
    </header>
  );
}

// Les propTypes permettent de graver dans le marbre les props à envoyer à un composant
// En leur absence, si un composant ne reçoit pas les props qu'il est supposé recevoir, 
// alors aucune erreur n'est levée dans la console.

// En revanche, s'ils sont présents et que les props marquées comme required sont absentes, 
// alors, on a des erreurs explicites qui sont levées dans la console et qui nous indiquent où
// se situe le problème.


PageHeader.propTypes = {
  title: PropTypes.string.isRequired, 
  info: PropTypes.shape({
    toto: PropTypes.string.isRequired,
    titi: PropTypes.string
  }).isRequired
};
