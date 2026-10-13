import PropTypes from 'prop-types';

const ProductType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired, 
    img: PropTypes.string.isRequired, 
    platform: PropTypes.string.isRequired
});

export default ProductType;