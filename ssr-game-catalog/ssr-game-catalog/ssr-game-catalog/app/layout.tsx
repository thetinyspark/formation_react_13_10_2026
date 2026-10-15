import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Video Game Store – SSR",
  description: "Catalogue de jeux vidéo en React Server Components",
};
/*Point de démarrage de l'application*/ 
export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="fr">
      <body>
        <div className="app-shell">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
