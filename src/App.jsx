import PageHeader from './components/PageHeader';
import CATALOG_MOCK from './data/Catalog_mock';

export default function App() {
  return (
    // Le Fragment ajoute le footer sans créer d'élément DOM englobant superflu.
    <>
      <main className="app-shell">
        <PageHeader />
      </main>
      
      { 
      // ce qui est situé entre accolades est considéré par défaut comme étant
      // de la data que jsx va intepréter, pas besoin de faire un return, c'est automatique.
      // ici donc, le retour de la fonction map des objets de type tableau, va 
      // être utilisé par la lib JSX et par React pour afficher autant 
      // de div avec des noms de produits qu'il y a de produits dans CATALOG_MOCK
        CATALOG_MOCK.map(
          (product) => (
            <div className="product-card" key={product.id}>
              <h2>{product.name}</h2>
            </div>
          )
        ) 
      }
      <footer className="course-note">Footer</footer>
    </>
  );
}
