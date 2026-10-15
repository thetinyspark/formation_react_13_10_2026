import Product from "../model/Product";

const CATALOG_MOCK = [

  Product.createFromObject(
  {
    "id": 1,
    "name": "Call Of Duty Deluxe of doom",
    "price": 79.99,
    "description": "A FPS game.",
    "img": "./assets/img/cod.jpg",
    "platform": "PC"
  }),
  Product.createFromObject({
    "id": 2,
    "name": "Tetris",
    "price": 29.99,
    "description": "A classic puzzle game.",
    "img": "./assets/img/tetris.jpg",
    "platform": "PC"
  }),
  Product.createFromObject({
    "id": 3,
    "name": "Mario Bros 3",
    "price": 9.99,
    "description": "A platform game.",
    "img": "./assets/img/mario.png",
    "platform": "NES"
  }),
  Product.createFromObject({
    "id": 4,
    "name": "Call Of Duty",
    "price": 59.99,
    "description": "A FPS game.",
    "img": "./assets/img/cod.jpg",
    "platform": "Switch"
  }),
  Product.createFromObject({
    "id": 5,
    "name": "Mario Kart",
    "price": 25.0,
    "description": "A FPS game.",
    "img": "./assets/img/kart.png",
    "platform": "N64"
  })
];

export default CATALOG_MOCK;
