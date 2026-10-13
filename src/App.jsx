import PageHeader from './components/PageHeader';
import Catalog from './components/Catalog';
import CatalogFilter from './components/CatalogFilter';
import CATALOG_MOCK from './data/Catalog_mock';



export default function App() {
  const title = "My Video Game Store";
  return (
    // Le Fragment ajoute le footer sans créer d'élément DOM englobant superflu.
    <>
      <main className="app-shell">
        <PageHeader title={title}/>
      </main>
      <CatalogFilter catalog={CATALOG_MOCK} />
      <Catalog catalog={CATALOG_MOCK} />
      <footer className="course-note">Footer</footer>
    </>
  );
}
