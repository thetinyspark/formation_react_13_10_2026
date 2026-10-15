import { render, screen } from '@testing-library/react';
import Catalog from '../components/Catalog';
import { MemoryRouter } from 'react-router-dom';
import CATALOG_MOCK from '../data/Catalog_mock';

describe('Catalog', () => {
  // Les tests vérifient les éléments visibles et les interactions, comme le ferait un utilisateur.
  it('renders the all the games passed in props', () => {
    render(
      <MemoryRouter>
        <Catalog catalog={CATALOG_MOCK}/>
      </MemoryRouter>
    );

    CATALOG_MOCK.forEach( 
      (product)=>{
        expect(screen.getByText(product.name)).toBeInTheDocument();
      }
    );
  });

});
