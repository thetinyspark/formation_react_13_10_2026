import ProductType from '../types/Product.type';

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
  product: ProductType.isRequired
};
