import { useParams } from "react-router-dom";

export default function ProductDetailedCardPage() {

  const { id } = useParams();

  return (
    <p>produit id: {id}</p>
    // <div className='product'>
    //     <h2>{product.name}</h2>
    //     <p>Prix: {product.price}</p>
    //     <p>Description: {product.description}</p>
    //     <p>Plateforme: {product.platform}</p>
    //     <img src={product.img} />
    // </div>
  );
}
