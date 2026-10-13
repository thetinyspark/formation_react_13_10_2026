import PropTypes from 'prop-types';
import ProductType from '../types/Product.type';

function getUniquePlatforms(catalog) {
  const platforms = catalog.map(product => product.platform);
  const uniq = new Set(platforms);
  return Array.from(uniq);
}

export default function CatalogFilter({catalog}) {
  return (
    <select>
      {
        getUniquePlatforms(catalog).map( 
          (platform, index)=>{
            return <option value={platform} key={index}>{platform}</option>
          }
        )
      }      
    </select>
  );
}

CatalogFilter.propTypes = {
  catalog: PropTypes.arrayOf(ProductType).isRequired
};
