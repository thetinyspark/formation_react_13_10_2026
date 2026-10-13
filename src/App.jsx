import PageHeader from './components/PageHeader';
import Catalog from './components/Catalog';
import CatalogFilter from './components/CatalogFilter';
import CATALOG_MOCK from './data/Catalog_mock';
import { useState } from 'react';


export default function App() {

  // quand on crée un état interne au composant avec useState
  // on crée en réalité un accesseur qui nous permet d'obtenir la valeur
  // dans notre exemple 'title' et un setter / mutator qui permet de modifier
  // la valeur contenue dans title. 

  // en utilisant useState et en modifiant, à l'aide de setTitle, la valeur
  // contenue dans title, on redéclenche automatiquement le rendu du composant
  // et de tous ses composants enfants.

  const title = "My Video Game Store";
  const [catalog, setCatalog] = useState(CATALOG_MOCK);
  function setCurrentPlatform(currentPlatform){

  }

  return (
    // Le Fragment ajoute le footer sans créer d'élément DOM englobant superflu.
    <>
      <main className="app-shell" >
        <PageHeader title={title}/>
      </main>
      <CatalogFilter catalog={catalog} setCurrentPlatform={setCurrentPlatform}  />
      <Catalog catalog={catalog} />
      <footer className="course-note">Footer</footer>
    </>
  );
}
