import PropTypes from 'prop-types';

export default function ProductCard({product}) {
  return (
    <div className='product'>
        <h2>{product.name}</h2>
        <p>Prix: {product.price}</p>
        <p>Description: {product.description}</p>
        <p>Plateforme: {product.platform}</p>
        <img src={product.img} />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired, 
    img: PropTypes.string.isRequired, 
    platform: PropTypes.string.isRequired
  }).isRequired
};
