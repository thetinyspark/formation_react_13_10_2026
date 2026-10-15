import { useDispatch, useSelector } from "react-redux";
import { addGames, setGames, setPriceMin } from "../store/gamesReducer";
import { useEffect, useMemo } from "react";

export default function useReduxStore(){
    // le dispatcher va prendre une action du reducer en paramètre
    // et une fois cette dernière effectuée, il va notifier le store 
    // du changement d'état et répercuter ainsi le changement partout 
    // où il en a besoin
    const dispatch = useDispatch();
    const {games, priceMin} = useSelector( (state)=> state.games);

     useEffect( 
        ()=>{
            async function getCatalog(){
                try{
                    const response = await window.fetch("/assets/catalog.json"); 
                    const catalogData = await response.json();
                    dispatch(setGames(catalogData))
                }
                    catch(error){
                    console.log(error);
                }
            }
            getCatalog();
        }, 
        []
    ); 

    const filteredGames = useMemo( 
        ()=>{
            return games.filter( p=>  p.price >= priceMin);
        }, 
        [priceMin]
    )


    return {
        games, 
        priceMin,
        filteredGames,
        // c'est parce que addGames ne renvoie aucune donnée
        // qu"il faut que le dispatcher intervienne après son éxécution
        // ce dernier va alors prendre la copie de l'état en cours qui 
        // été envoyée à addGames et modifiée par ce dernier et en faire 
        // le nouvel état du store (pour la clé associée donc "games")
        // Une fois cela fait, la valeur games du store est modifiée
        // et le rendu des composants qui l'utilisent est déclenché
        // (cela fonctionne de a même manière qu'un useState)
        addGames : (value) => dispatch(addGames(value)),
        setGames : (value) => dispatch(setGames(value)),
        setPriceMin : (value) => dispatch(setPriceMin(value)),
    }
}