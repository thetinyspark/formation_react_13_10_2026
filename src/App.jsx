import PageHeader from './components/PageHeader';
import { Route, Routes} from 'react-router-dom';
import CatalogPage from './components/screens/CatalogPage';
import HomePage from './components/screens/HomePage';
import ProductDetailedCardPage from './components/screens/ProductDetailedCardPage';
import CartPage from './components/screens/CartPage';
import AppNav from './components/AppNav';



export default function App() {

  const title = "My Video Game Store";
  
  return (
    <>
      <main className="app-shell" >
        <PageHeader title={title}/>
        <AppNav />

        <Routes>
          <Route path="/" element={ <HomePage /> }/>
          <Route path="/catalog" element={ <CatalogPage /> }/>
          <Route path="/product/:id" element={ <ProductDetailedCardPage /> }/>
          <Route path="/cart" 
                element={ 
                    <CartPage /> 
                }/>
        </Routes>
      </main>
      <footer className="course-note">Footer</footer>
    </>
  );
}
