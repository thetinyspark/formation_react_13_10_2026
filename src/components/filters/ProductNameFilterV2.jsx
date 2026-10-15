import PropTypes from 'prop-types';
import React from 'react';

export default class ProductNameFilterV2 extends React.Component {
  constructor({ onValueChange, testid }) {
    super();
    this.onValueChange = onValueChange;
    this.testid = testid;
  }

  /*
  Se déclenche lorsque le composant est monté dans le DOM (donc juste après le constructor).
   */
  componentDidMount() {
    console.log("ProductNameFilterV2 mounted");
  }

  /* Se déclenche lorsque le composant est démonté du DOM. 
  (Un changement de page par exemple)
  */
  componentWillUnmount() {
    console.log("ProductNameFilterV2 unmounted");
  }

  /* Se déclenche lorsque le composant est mis à jour (par exemple, si ses props 
  ou un de ses states changent).*/
  componentDidUpdate(prevProps) {
    if (prevProps.onValueChange !== this.props.onValueChange) {
      console.log("ProductNameFilterV2 updated: onValueChange prop changed");
    }
  }

  /* Retourne le HTML compilé à afficher dans le navigateur */
  render() {
      return (
        <input 
        type="text" 
        placeholder="Filter by name..." 
        data-testid={this.testid}
        onChange={(e) => this.onValueChange(e.target.value)}
      />
    );
  }
}
ProductNameFilterV2.propTypes = {
  onValueChange: PropTypes.func.isRequired
};
