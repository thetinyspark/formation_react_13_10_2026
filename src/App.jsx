import PageHeader from './components/PageHeader';
import CATALOG_MOCK from './data/Catalog_mock';

function getUniquePlatforms(catalog) {
  const platforms = catalog.map(product => product.platform);
  const uniq = new Set(platforms);
  return Array.from(uniq);
}

export default function App() {
  const title = "My Video Game Store";
  const info = { toto: "toto"};
  return (
    // Le Fragment ajoute le footer sans créer d'élément DOM englobant superflu.
    <>
      <main className="app-shell">
        <PageHeader title={title} info={info}/>
      </main>
      <select>
      {
        getUniquePlatforms(CATALOG_MOCK).map( 
          (platform, index)=>{
            return <option value={platform} key={index}>{platform}</option>
          }
        )
      }      
      </select>
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
              <p>Prix: {product.price}</p>
              <p>Description: {product.description}</p>
              <p>Plateforme: {product.platform}</p>
              <img src={product.img} />
            </div>
          )
        ) 
      }
      <footer className="course-note">Footer</footer>
    </>
  );
}
