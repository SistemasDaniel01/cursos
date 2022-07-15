export class Product {

  id: number;
  name: string;
  description: string;
  price: number;
  imageUrL: string;


  constructor(id:number, name:string, description: string, price: number, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrL = imageUrl;
  }
}
