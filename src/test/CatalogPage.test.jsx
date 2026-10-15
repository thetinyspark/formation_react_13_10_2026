import { queryByText, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CatalogPage from '../components/screens/CatalogPage';
import GameProvider from '../contexts/GameProvider';
import { afterEach, beforeAll, beforeEach, vi } from 'vitest';
import CATALOG_MOCK from '../data/Catalog_mock';
import userEvent from '@testing-library/user-event';


async function waitFor(delayInMs){
  return new Promise( 
    (resolve)=> setTimeout( resolve, delayInMs)
  )
}



describe('CatalogPage', () => {


  beforeAll(
    ()=>{
      vi.stubGlobal(
        'fetch', 
        vi.fn().mockResolvedValue({
          json: ()=>Promise.resolve(CATALOG_MOCK)
        })
      );
    }
  )
  afterAll(
    ()=>{
      vi.unstubAllGlobals();
    }
  );

  // Les tests vérifient les éléments visibles et les interactions, comme le ferait un utilisateur.
  it('renders the all the games from the API', async () => {
    render(
      <MemoryRouter>
        <GameProvider>
          <CatalogPage/>
        </GameProvider>
      </MemoryRouter>
    );

    await waitFor(1);

    CATALOG_MOCK.forEach( 
      (product)=>{
        expect(screen.getByText(product.name)).toBeInTheDocument();
      }
    );
  });

  it('should filter games by platform', async () => {

    const user = userEvent.setup();
    const currentPlatform = CATALOG_MOCK[0].platform;
    render(
      <MemoryRouter>
        <GameProvider>
          <CatalogPage/>
        </GameProvider>
      </MemoryRouter>
    );

    await waitFor(10);
    await user.selectOptions(screen.getByRole('combobox'), currentPlatform);
    await waitFor(10);

    CATALOG_MOCK.forEach( 
      async (product)=>{
        if( product.platform == currentPlatform){
          expect(screen.getByText(product.name)).toBeInTheDocument();
        }
        else{
          expect(screen.queryByText(product.name)).not.toBeInTheDocument()
        }
      }
    );
  });

  it('should filter games by price min & max', async () => {
    const user = userEvent.setup();
    const priceMin = Math.round(Math.random() * 100);
    const priceMax = priceMin + Math.round(Math.random() * 100);
    render(
      <MemoryRouter>
        <GameProvider>
          <CatalogPage/>
        </GameProvider>
      </MemoryRouter>
    );

    await waitFor(10);
    const priceMinFilter = await screen.getByTestId("pricemin-filter");
    const priceMaxFilter = await screen.getByTestId("pricemax-filter");
    await user.clear(priceMinFilter);
    await user.type(priceMinFilter, priceMin.toString());
    await user.type(priceMaxFilter, priceMax.toString());
    await waitFor(10);

    CATALOG_MOCK.forEach( 
      async (product)=>{
        if( product.price >= priceMin && product.price <= priceMax){
          expect(screen.getByText(product.name)).toBeInTheDocument();
        }
        else{
          expect(screen.queryByText(product.name)).not.toBeInTheDocument()
        }
      }
    );
  });

});
