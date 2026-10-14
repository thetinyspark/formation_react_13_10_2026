import PageHeader from './components/PageHeader';
import Catalog from './components/Catalog';
import { useMemo, useState } from 'react';
import ProductPlatformFilter from './components/filters/ProductPlatformFilter';
import ProductNameFilter from './components/filters/ProductNameFilter';
import ProductPriceFilter from './components/filters/ProductPriceFilter';
import useGameStore from './hooks/useGameStore';


function getUniquePlatforms(catalog) {
  const platforms = catalog.map(product => product.platform);
  const uniq = Array.from(new Set(platforms));
  uniq.unshift("All");
  return uniq;
}

export default function App() {

  const {catalog} = useGameStore();

  const title = "My Video Game Store";
  // const [catalog, setCatalog] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [searchNameFilter, setSearchNameFilter] = useState("");
  const [minPriceFilter, setMinPriceFilter] = useState(0);
  const [maxPriceFilter, setMaxPriceFilter] = useState(100);
  const [platforms, setPlatforms] = useState(getUniquePlatforms(catalog));
  const filteredGames = useMemo(
    ()=>{
      let results = [];
      results = (selectedPlatform == 'All') ? catalog : catalog.filter( p => p.platform === selectedPlatform);
      results = results.filter( p=> p.name.toLowerCase().includes(searchNameFilter.toLowerCase()));
      results = results.filter( p=> p.price <= maxPriceFilter && p.price >= minPriceFilter);
      return results;
    }, 
    [selectedPlatform, searchNameFilter,minPriceFilter,maxPriceFilter,catalog]
  );


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
