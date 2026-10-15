import { render, screen } from '@testing-library/react';
import PageHeader from '../components/PageHeader';

describe('PageHeader', () => {
  // Les tests vérifient les éléments visibles et les interactions, comme le ferait un utilisateur.
  [
    "My title 1", 
    "Coco l'asticot",
    "Jambon de Bayonne"
  ].forEach( 
    (currentTitle)=>{
      it( `renders the title "${currentTitle}" passed in props`, () => {
        render(
            <PageHeader title={currentTitle}/>
        );

        expect(screen.getByText(currentTitle)).toBeInTheDocument();
      });
    }
  )

  
});
