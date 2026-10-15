import PropTypes from 'prop-types';



export default function ProductPlatformFilter({platforms, testid, setCurrentPlatform}) {


  function onChangeHandler(event){
    setCurrentPlatform(event.target.value);
  }

  return (
    <select onChange={onChangeHandler}>
      {
        platforms.map( 
          (platform, index)=>{
            return <option value={platform} data-testid={testid} key={index}>{platform}</option>
          }
        )
      }      
    </select>
  );
}

ProductPlatformFilter.propTypes = {
  platforms: PropTypes.arrayOf(PropTypes.string).isRequired
};
