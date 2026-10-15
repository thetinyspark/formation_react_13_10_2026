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
      <ProductPriceFilter     testid="pricemin-filter"          onPriceChange={setMinPriceFilter} label="Min Price" />
      <ProductPriceFilter     testid="pricemax-filter"          onPriceChange={setMaxPriceFilter} label="Max Price" />
      <ProductNameFilter      testid="name-filter"         onValueChange={setSearchNameFilter} />
      <ProductPlatformFilter  testid="platform-filter"     platforms={platforms} setCurrentPlatform={setSelectedPlatform}  />
      <Catalog catalog={filteredGames} />
    </>
  );
}