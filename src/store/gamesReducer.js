import { createSlice } from "@reduxjs/toolkit"

// on a un état initial qui est un objet avec une propriété games qui vaut un tableau vide
const initialState = {
    games: [], 
    priceMin: 0
}

// on crée un objet de type slice qui associe un état initial à un reducer. 
// le reducer possède plusieurs actions
const slice = createSlice(
    {
        name: "games", 
        initialState, 
        reducers: {
            addGames(state, action){
                // l'action modifie une copie du state en cours
                // envoyée par redux mais elle ne renvoie aucune donnée
                // le action ici, représente un objet qui porte certaines
                // informations notamment, la valeur envoyée par l'utilisateur
                // à l'action addGames (donc le Math.random) mais également le nom
                // de l'action.
                // state.games = [...state.games, action.payload];
                state.games.push(action.payload);
            },
            setGames(state, action){
                state.games = action.payload;
            },
            setPriceMin(state, action){
                state.priceMin = action.payload;
            }
        }
    }
); 

// on peut exporter les actions individuellement afin de les utiliser plus facilement
export const {addGames, setGames, setPriceMin} = slice.actions;

// on peut exporter le reducer afin de le déclarer dans le store
export default slice.reducer;