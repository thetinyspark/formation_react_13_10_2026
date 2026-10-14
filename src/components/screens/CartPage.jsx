import { Navigate } from "react-router-dom";

export default function CartPage() {
  const isCartEmpty = true;
  return (
    isCartEmpty ? <Navigate to="/catalog"></Navigate> : <p>coucou c'est le panier</p>
  );
}