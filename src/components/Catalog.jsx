import PropTypes from 'prop-types';
import ProductType from '../types/Product.type';
import ProductCard from './ProductCard';

export default function Catalog({catalog}) {
  return (
    catalog.map(
      (product) => (
        <ProductCard product={product} key={product.id}/>
      )
    ) 
  );
}

Catalog.propTypes = {
  catalog: PropTypes.arrayOf(ProductType).isRequired
};
