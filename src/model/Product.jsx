export default class Product {
    constructor(
        id, 
        name, 
        price, 
        description, 
        img, 
        platform
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = img;
        this.platform = platform;
    }
}