import { useEffect, useMemo, useState } from "react";
import GameContext from "./GameContext";

export default function GameProvider({children}){
    const [catalog, setCatalog] = useState([]);

    const value = useMemo(
        ()=>{
            return {
                catalog, 
            }
        }
    );

    useEffect( 
        ()=>{
            async function getCatalog(){
                try{
                const response = await window.fetch("./assets/catalog.json"); 
                const catalogData = await response.json();
                setCatalog(catalogData);
                }
                catch(error){
                console.log(error);
                }
            }
            getCatalog();
        }, 
        []
    ); 

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}