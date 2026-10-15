import type { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

/**
 * Server Component : reçoit les données déjà filtrées / chargées
 * par le parent (page Server Component).
 */
export default function Catalog({ catalog }: { catalog: Product[] }) {
  if (catalog.length === 0) {
    return <p className="empty">Aucun jeu ne correspond aux critères.</p>;
  }

  return (
    <div className="catalog">
      {catalog.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
