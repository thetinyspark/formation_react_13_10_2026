import PageHeader from './components/PageHeader';
import Catalog from './components/Catalog';
import CatalogFilter from './components/CatalogFilter';
import CATALOG_MOCK from './data/Catalog_mock';
import { useMemo, useState } from 'react';


function getUniquePlatforms(catalog) {
  const platforms = catalog.map(product => product.platform);
  const uniq = Array.from(new Set(platforms));
  uniq.unshift("All");
  return uniq;
}

export default function App() {

  // quand on crée un état interne au composant avec useState
  // on crée en réalité un accesseur qui nous permet d'obtenir la valeur
  // dans notre exemple 'title' et un setter / mutator qui permet de modifier
  // la valeur contenue dans title. 

  // en utilisant useState et en modifiant, à l'aide de setTitle, la valeur
  // contenue dans title, on redéclenche automatiquement le rendu du composant
  // et de tous ses composants enfants.

  const title = "My Video Game Store";
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [platforms, setPlatforms] = useState(getUniquePlatforms(CATALOG_MOCK));
  const filteredGames = useMemo(
    ()=>{
      // condition ternaire, si la condition entre parenthèses est vraie alors on retourne CATALOG_MOCK
      // sinon on retourne un CATALOG_MOCK filtré, toutefois, si la valeur contenue dans selectedPlatform
      // a déjà été envoyée par le passé, alors cette fonction ne s'éxécute plus, le résultat qui a été mis 
      // en cache par React est renvoyé à la place. 

      // useMemo est très utile pour économiser des ressources.
      return (selectedPlatform == 'All') ? CATALOG_MOCK : CATALOG_MOCK.filter( p => p.platform === selectedPlatform);
    }, 
    [selectedPlatform]
  );



  return (
    // Le Fragment ajoute le footer sans créer d'élément DOM englobant superflu.
    <>
      <main className="app-shell" >
        <PageHeader title={title}/>
      </main>
      <CatalogFilter platforms={platforms} setCurrentPlatform={setSelectedPlatform}  />
      <Catalog catalog={filteredGames} />
      <footer className="course-note">Footer</footer>
    </>
  );
}
