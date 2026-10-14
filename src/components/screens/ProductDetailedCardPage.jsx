import { useParams } from "react-router-dom";
import useGameStore from "../../hooks/useGameStore";

export default function ProductDetailedCardPage() {

  const { id } = useParams();
  const {getProductById} = useGameStore();
  const product = getProductById(id);

  console.log("Product: " + product);

  return (
    product &&
    <div className='product'>
        <h2>{product.name}</h2>
        <p>Prix: {product.price}</p>
        <p>Description: {product.description}</p>
        <p>Plateforme: {product.platform}</p>
        <img src={product.img} />
    </div>
  );
}
