import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
products: any=[
  { Name: 'pen', price: 10, Rating: 4, FreeDelivery: 'true' },
  { Name: 'phone', price: 1000, Rating: 3, FreeDelivery: 'false' },
  { Name: 'shirt', price: 500, Rating: 4, FreeDelivery: 'true' },
  { Name: 'cap', price: 100, Rating: 5, FreeDelivery: 'false' },
  { Name: 'mobile case', price: 150, Rating: 2, FreeDelivery: 'true' },
  { Name: 'remote', price: 100, Rating: 3, FreeDelivery: 'false' },
  { Name: 'Ac', price: 40000, Rating: 4.5, FreeDelivery: 'true' },
];

term:string = "";

name:string = "";
price:number = 0;
rating:number = 0;
radio:any = "";
radio1:any ="";

delete(i:number){
  this.products.splice(i,1);
}

search(){
  this.products = this.products.filter((product:any)=>product.Name.includes(this.term));
}
// free(){
//   this.products=
// }
priceh(){
  this.products.sort((a:any,b:any)=>a.price-b.price)
}
pricel(){
  this.products.sort((a:any,b:any)=>b.price-a.price)
}
ratingh(){
  this.products.sort((a:any,b:any)=>a.Rating-b.Rating)
}
ratingl(){
  this.products.sort((a:any,b:any)=>b.Rating-a.Rating)
}
disc(){
    this.products = this.products.map((product:any)=>{
      product.price = product.price/2;
      return product;
    })
}

total(){
  let totalprice = this.products.reduce((sum:any,product:any)=>sum+product.price,0);
  alert(totalprice);
}

cart(){
  alert(this.products.length);
}

// add(){
//   let product = {
//     Name:this.name,
//     price:this.price,
//     Rating:this.rating,
//     FreeDelivery:this.radio
    
//   }
//   this.products.unshift(product)
// }
}
