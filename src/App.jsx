import PageHeader from './components/PageHeader';
import {Link, NavLink, Route, Routes} from 'react-router-dom';
import CatalogPage from './components/screens/CatalogPage';
import HomePage from './components/screens/HomePage';
import ProductDetailedCardPage from './components/screens/ProductDetailedCardPage';



export default function App() {

  const title = "My Video Game Store";
  
  return (
    <>
      <main className="app-shell" >
        <PageHeader title={title}/>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              {/* <NavLink to="/catalog">Catalog</NavLink> */}
              <Link to="/catalog">Catalog 2</Link>
            </li>
            <li>
              {/* <NavLink to="/catalog">Catalog</NavLink> */}
              <Link to="/product/1">Produit id 1</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={ <HomePage /> }/>
          <Route path="/catalog" element={ <CatalogPage /> }/>
          <Route path="/product/:id" element={ <ProductDetailedCardPage /> }/>
        </Routes>
      </main>
      <footer className="course-note">Footer</footer>
    </>
  );
}
