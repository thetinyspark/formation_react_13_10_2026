import Link from "next/link";
import type { Product } from "@/lib/types";

/**
 * Server Component pur : aucun hook, aucun event handler.
 * Peut être rendu entièrement côté serveur.
 */
export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product">
      <h2>{product.name}</h2>
      <p>Prix : {product.price.toFixed(2)} €</p>
      <p>Plateforme : {product.platform}</p>
      <img src={product.img} alt={product.name} width={120} height={120} />
      <Link href={`/product/${product.id}`}>Voir le détail</Link>
    </article>
  );
}
