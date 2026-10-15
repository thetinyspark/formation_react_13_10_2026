import useReduxStore from "../../hooks/useReduxStore";

export default function HomePage() {
  const {games, addGames} = useReduxStore();
  return (
    <>
      <p>Bienvenue dans la boutique de jeu rétro</p>
      <button onClick={ ()=>addGames("Jeu numéro: " +Math.random())}>Add</button>
      {
        games.map(
          (current)=><p>{current}</p>
        )
      }
    </>
  );
}
