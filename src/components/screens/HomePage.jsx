import useReduxStore from "../../hooks/useReduxStore";
import ProductCard from "../ProductCard";

export default function HomePage() {
  const {games, filteredGames, setPriceMin} = useReduxStore();
  return (
    <>
      <p>Bienvenue dans la boutique de jeu rétro</p>
      <label>Prix min: </label>
      <input type="number" onChange={ (e)=>setPriceMin(e.target.value)} />
      <br/>
      {
        filteredGames.map(
          (current)=> <ProductCard key={current.id} product={current} />
        )
      }
    </>
  );
}
