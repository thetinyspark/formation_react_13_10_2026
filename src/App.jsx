import PageHeader from './components/PageHeader';
import IDCard from './components/IDCard';

export default function App() {
  return (
    // Le Fragment ajoute le footer sans créer d'élément DOM englobant superflu.
    <>
      <main className="app-shell">
        <PageHeader />
      </main>
      <IDCard />
      <footer className="course-note">Footer</footer>
    </>
  );
}
