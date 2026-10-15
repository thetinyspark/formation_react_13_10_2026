import Link from "next/link";

/**
 * Page d'accueil – Server Component.
 */
export default async function HomePage() {
  return (
    <>
      <p>Bienvenue dans la boutique de jeux rétro.</p>
      <p>
        <Link href="/catalog">Voir le catalogue complet →</Link>
      </p>
    </>
  );
}
