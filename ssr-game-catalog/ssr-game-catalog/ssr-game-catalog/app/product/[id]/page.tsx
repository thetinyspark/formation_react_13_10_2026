import Link from "next/link";
import { getProductById, getCatalog } from "@/lib/catalog";

type Props = {
  params: Promise<{ id: string }>;
};

/**
 * Page détail produit – Server Component.
 * Les données sont résolues côté serveur à partir de l'id de l'URL.
 * generateStaticParams permet le pre-render des pages connues.
 */
export async function generateStaticParams() {
  const catalog = await getCatalog();
  return catalog.map((p) => ({ id: String(p.id) }));
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(Number(id));

  if (!product) {
    return <p>Not Found</p>
  }

  return (
    <article className="product">
      <Link href="/catalog" className="back">
        ← Retour au catalogue
      </Link>

      <h2>{product.name}</h2>
      <p>
        <strong>Prix :</strong> {product.price.toFixed(2)} €
      </p>
      <p>
        <strong>Plateforme :</strong> {product.platform}
      </p>
      <p><strong>Description :</strong> {product.description}</p>
      <img src={product.img} alt={product.name} width={280} height={280} />
    </article>
  );
}
