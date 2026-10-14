import PageHeader from './components/PageHeader';
import Catalog from './components/Catalog';
import { useMemo, useState } from 'react';
import ProductPlatformFilter from './components/filters/ProductPlatformFilter';
import ProductNameFilter from './components/filters/ProductNameFilter';
import ProductPriceFilter from './components/filters/ProductPriceFilter';
import useGameStore from './hooks/useGameStore';



export default function App() {

  const {
    filteredGames, 
    setMinPriceFilter, 
    setMaxPriceFilter, 
    setSearchNameFilter, 
    setSelectedPlatform,
    platforms
  } = useGameStore();

  const title = "My Video Game Store";
  
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
