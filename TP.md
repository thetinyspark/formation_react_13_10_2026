# TP n°10 

- Au sein du GameProvider, ajoutez l'état suivant [cart,setCart]
- Vous pouvez ajouter les fonctionnalités suivantes: 
    - addToCart (qui utilisera donc setCart)
    - removeFromCart (qui utilisera donc setCart)
    - getTotalPriceHT
    - getTotalPriceTTC

- Dans le ProductDetailedCardPage.jsx, ajoutez un bouton "Ajouter au panier", 
qui déclenchera la fonction addToCart. 

- Enfin, faites en sorte de protéger la CartPage.jsx en vérifiant 
le nombre de produits au sein du cart puis affichez les produits, le total HT, le total TTC (TVA 20%). 


BONUS: Au sein du Cart, ajoutez un bouton permettant de supprimer chacun des produits du panier


SUPER BONUS QUI SERT A RIEN SAUF LA GLOIRE: 
    - Gérez les doublons de produits avec les quantités

