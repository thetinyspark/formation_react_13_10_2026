import PropTypes from 'prop-types';



export default function ProductPlatformFilter({platforms, setCurrentPlatform}) {


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

ProductPlatformFilter.propTypes = {
  platforms: PropTypes.arrayOf(PropTypes.string).isRequired
};
