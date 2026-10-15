import { useEffect, useMemo, useState } from "react";
import GameContext from "./GameContext";

function getUniquePlatforms(catalog) {
  const platforms = catalog.map(product => product.platform);
  const uniq = Array.from(new Set(platforms));
  uniq.unshift("All");
  return uniq;
}


export default function GameProvider({children}){
    const [cart, setCart] = useState([]);
    const [catalog, setCatalog] = useState([]);
    const [selectedPlatform, setSelectedPlatform] = useState("All");
    const [searchNameFilter, setSearchNameFilter] = useState("");
    const [minPriceFilter, setMinPriceFilter] = useState(0);
    const [maxPriceFilter, setMaxPriceFilter] = useState(100);
    const [platforms, setPlatforms] = useState(getUniquePlatforms(catalog));


    const store = useMemo(
        ()=>{
            let filteredGames = [];
            filteredGames = (selectedPlatform == 'All') ? catalog : catalog.filter( p => p.platform === selectedPlatform);
            filteredGames = filteredGames.filter( p=> p.name.toLowerCase().includes(searchNameFilter.toLowerCase()));
            filteredGames = filteredGames.filter( p=> p.price <= maxPriceFilter && p.price >= minPriceFilter);
            return {
                filteredGames,
                catalog, 
                minPriceFilter, 
                maxPriceFilter, 
                platforms, 
                cart,
                setMinPriceFilter, 
                setMaxPriceFilter, 
                setSearchNameFilter, 
                setSelectedPlatform, 
                getProductById: (id)=>{
                    return catalog.find( p=>p.id == id) || null;
                }, 

                addToCart: (product) => {
                    setCart([...cart, product]);
                },
                removeFromCart: (product) => {
                    const tmp = [...cart];
                    const pos = tmp.indexOf(product);
                    tmp.splice(pos, 1)
                    setCart(tmp);
                },
                getTotalPriceHT: () => {
                    return cart.reduce(
                        (total, product) => {
                            return total + product.price;
                        },
                        0
                    );
                },
                getTotalPriceTTC: () => {
                    return cart.reduce(
                        (total, product) => {
                            return total + product.price;
                        },
                        0
                    ) * 1.2;
                }
            }
        }, 
        [selectedPlatform, searchNameFilter,minPriceFilter,maxPriceFilter,catalog, platforms, cart]
    );

    useEffect( 
        ()=>{
            async function getCatalog(){
                try{
                    const response = await window.fetch("/assets/catalog.json"); 
                    const catalogData = await response.json();
                    setCatalog(catalogData);
                    setPlatforms(getUniquePlatforms(catalogData));
                }
                    catch(error){
                    console.log(error);
                }
            }
            getCatalog();
        }, 
        []
    ); 

    return <GameContext.Provider value={store}>{children}</GameContext.Provider>
}