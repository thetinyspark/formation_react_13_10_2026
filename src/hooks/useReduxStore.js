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

            let myInterval = setInterval(getCatalog, 10000);
            getCatalog();


            return ()=>{
                // fonction qui sera exécutée lors du démontage du composant
                clearInterval(myInterval);
                // elle peut servir à se désabonner d'un événement ou à 
                // nettoyer des ressources comme par exemple des setInterval
            }
        }, 
        [] // le tableau vide signifie que l'effet ne sera exécuté 
        // qu'une seule fois, au montage du composant, et qu'il ne sera pas réexécuté 
        // lors des mises à jour du composant
        // si le composant avait été sous forme de classe, cela aurait 
        // été équivalent à componentDidMount mais si on avait essayé d'utiliser 
        // useEffect dans componentDidMount, cela aurait été une erreur car useEffect 
        // ne peut être utilisé que dans des composants fonctionnels
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