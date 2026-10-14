import Catalog from '../Catalog';
import ProductPlatformFilter from '../filters/ProductPlatformFilter';
import ProductNameFilter from '../filters/ProductNameFilter';
import ProductPriceFilter from '../filters/ProductPriceFilter';
import useGameStore from '../../hooks/useGameStore';

export default function CatalogPage() {

  const {
    filteredGames, 
    setMinPriceFilter, 
    setMaxPriceFilter, 
    setSearchNameFilter, 
    setSelectedPlatform,
    platforms
  } = useGameStore();

  return (
    <>
      <ProductPriceFilter onPriceChange={setMinPriceFilter} label="Min Price" />
      <ProductPriceFilter onPriceChange={setMaxPriceFilter} label="Max Price" />
      <ProductNameFilter onValueChange={setSearchNameFilter} />
      <ProductPlatformFilter platforms={platforms} setCurrentPlatform={setSelectedPlatform}  />
      <Catalog catalog={filteredGames} />
    </>
  );
}