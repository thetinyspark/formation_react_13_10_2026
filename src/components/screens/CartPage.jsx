import { Navigate } from "react-router-dom";
import useGameStore from "../../hooks/useGameStore";

export default function CartPage() {
  const {cart, removeFromCart, getTotalPriceHT, getTotalPriceTTC} = useGameStore();
  const isCartEmpty = cart.length == 0;
  return (
    isCartEmpty ? <Navigate to="/catalog"></Navigate> : 
    <table className="cart">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Prix</th>
        <th>Thumb</th>
        <th>Actions</th>
      </tr>
    {
      cart.map( 
        (product)=> <tr>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}€</td>
          <td><img src={product.img} /></td>
          <td><button onClick={ ()=>removeFromCart(product)}>X</button></td>
        </tr>
      )
    }
      <tr>
        <td colSpan={3}></td>
        <td>Total HT:</td>
        <td>{getTotalPriceHT()}€</td>
      </tr>
      <tr>
        <td colSpan={3}></td>
        <td>Total HT:</td>
        <td>{getTotalPriceTTC()}€</td>
      </tr>
    </table>
  );
}