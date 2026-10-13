import PropTypes from 'prop-types';
import ProductType from '../types/Product.type';
import { useState } from 'react';



export default function CatalogFilter({platforms, setCurrentPlatform}) {


  function onChangeHandler(event){
    setPlatform(event.target.value);
    setCurrentPlatform(event.target.value);
  }

  const [currentPlatform, setPlatform] = useState("");

  return (
    <>
    {/* <p>{currentPlatform}</p> */}
    <select onChange={onChangeHandler}>
      {
        platforms.map( 
          (platform, index)=>{
            if( platform === currentPlatform){
              return <option selected value={platform} key={index}>{platform}</option>
            }
            else{

              return <option value={platform} key={index}>{platform}</option>
            }
          }
        )
      }      
    </select>
    </>
  );
}

CatalogFilter.propTypes = {
  catalog: PropTypes.arrayOf(ProductType).isRequired
};
