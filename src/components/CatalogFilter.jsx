import PropTypes from 'prop-types';
import ProductType from '../types/Product.type';



export default function CatalogFilter({platforms, setCurrentPlatform}) {


  function onChangeHandler(event){
    setCurrentPlatform(event.target.value);
  }

  return (
    <select onChange={onChangeHandler}>
      {
        platforms.map( 
          (platform, index)=>{
            return <option value={platform} key={index}>{platform}</option>
          }
        )
      }      
    </select>
  );
}

CatalogFilter.propTypes = {
  platforms: PropTypes.arrayOf(PropTypes.string).isRequired
};
