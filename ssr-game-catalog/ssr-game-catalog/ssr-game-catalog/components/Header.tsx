import Link from "next/link";

export default function Header() {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">My Video Game Store</p>
        <h1>Boutique de jeux rétro</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/catalog">Catalogue</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
