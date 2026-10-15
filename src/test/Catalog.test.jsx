import { render, screen } from '@testing-library/react';
import Catalog from '../components/Catalog';
import { MemoryRouter } from 'react-router-dom';
import CATALOG_MOCK from '../data/Catalog_mock';

describe('Catalog', () => {
  // Les tests vérifient les éléments visibles et les interactions, comme le ferait un utilisateur.
  it('renders the games', () => {
    render(
      <MemoryRouter>
        <Catalog catalog={CATALOG_MOCK}/>
      </MemoryRouter>
    );

    expect(screen.getByText(/call of duty deluxe/i)).toBeInTheDocument();
  });


});
