import PropTypes from 'prop-types';
import ProductType from '../types/Product.type';
import ProductCard from './ProductCard';

export default function Catalog({catalog}) {
  return (
    <div className='catalog'>
      {
        catalog.map(
          (product) => (
            <ProductCard product={product} key={product.id}/>
          )
        ) 
      }
    </div>
  );
}

Catalog.propTypes = {
  catalog: PropTypes.arrayOf(ProductType).isRequired
};
