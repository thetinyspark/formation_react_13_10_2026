import { Link } from 'react-router-dom';
import ProductType from '../types/Product.type';

export default function ProductCard({product}) {
  return (
    <div className='product'>
        <h2>{product.name}</h2>
        <p>Prix: {product.price}</p>
        <p>Plateforme: {product.platform}</p>
        <img src={product.img} />
        <Link to={ `/product/${product.id}` }><p>Voir le détail</p></Link>
    </div>
  );
}

ProductCard.propTypes = {
  product: ProductType.isRequired
};
