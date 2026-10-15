import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesReducer";

// le store est un magasin de données avant tout, il sert à entreproser des données
// et avec redux ces données sont stockées au sein d'un état interne que l'on 
// va calculer / modifier avec les reducers
export const store = configureStore(
    {
        reducer: {
            games: gamesReducer
        }
    }
)