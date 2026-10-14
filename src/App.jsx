import PageHeader from './components/PageHeader';
import Catalog from './components/Catalog';
import CATALOG_MOCK from './data/Catalog_mock';
import { useEffect, useMemo, useState } from 'react';
import ProductPlatformFilter from './components/filters/ProductPlatformFilter';
import ProductNameFilter from './components/filters/ProductNameFilter';
import ProductPriceFilter from './components/filters/ProductPriceFilter';


function getUniquePlatforms(catalog) {
  const platforms = catalog.map(product => product.platform);
  const uniq = Array.from(new Set(platforms));
  uniq.unshift("All");
  return uniq;
}

export default function App() {
  const title = "My Video Game Store";
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [searchNameFilter, setSearchNameFilter] = useState("");
  const [minPriceFilter, setMinPriceFilter] = useState(0);
  const [maxPriceFilter, setMaxPriceFilter] = useState(100);
  const [platforms, setPlatforms] = useState(getUniquePlatforms(CATALOG_MOCK));
  const filteredGames = useMemo(
    ()=>{
      let results = [];
      results = (selectedPlatform == 'All') ? CATALOG_MOCK : CATALOG_MOCK.filter( p => p.platform === selectedPlatform);
      results = results.filter( p=> p.name.toLowerCase().includes(searchNameFilter.toLowerCase()));
      results = results.filter( p=> p.price <= maxPriceFilter && p.price >= minPriceFilter);
      return results;
    }, 
    [selectedPlatform, searchNameFilter,minPriceFilter,maxPriceFilter]
  );

  useEffect( 
    // on ne peut pas rendre cette fonction asynchrone car la fonction
    // envoyée à useEffect ne doit renvoyer aucune valeur, pas même une promise
    // de void
    ()=>{

      // une fonction asynchrone renvoie systématiquement une promise
      // mais elle comporte un avantage syntaxique, elle nous permet 
      // d'utiliser le mot clé await et donc d'éviter le code en c
      async function getCatalog(){
        try{
          // le temps que cette promesse soit résolue, l'éxécution de la 
          // fonction est stoppée
          const response = await window.fetch("./assets/catalog.json"); 

          // même chose ici
          const catalogData = await response.json();
          console.log(catalogData);

          // maintenant ce qu'il faut c'est utiliser catalogData au lieu de CATALOG_MOCK
          // donc les données contenues dans catalogData vont servir à changer un état 
          // à partir duquel on filtre toutes les données
        }
        catch(error){
          console.log(error);
        }
      }

      // on déclenche la fonction getCatalog() ici
      getCatalog();
    }, 
    [] // <- signifie que useEffect est déclenché une fois au montage çàd au démarrage du composant
  )



  return (
    <>
      <main className="app-shell" ><PageHeader title={title}/></main>
      <ProductPriceFilter onPriceChange={setMinPriceFilter} label="Min Price" />
      <ProductPriceFilter onPriceChange={setMaxPriceFilter} label="Max Price" />
      <ProductNameFilter onValueChange={setSearchNameFilter} />
      <ProductPlatformFilter platforms={platforms} setCurrentPlatform={setSelectedPlatform}  />
      <Catalog catalog={filteredGames} />
      <footer className="course-note">Footer</footer>
    </>
  );
}
