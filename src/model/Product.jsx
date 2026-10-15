export default class Product {
    constructor(id, name, price, description, img, platform){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = img;
        this.platform = platform;
    }

    getPriceHT(){
        return this.price;
    }

    getPriceTTC(){
        return this.price * 1.2;
    }

    static createFromObject(obj){
        return new Product(obj.id, obj.name, obj.price, obj.description, obj.img, obj.platform);
    }
}