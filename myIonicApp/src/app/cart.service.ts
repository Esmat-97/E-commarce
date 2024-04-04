import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  items :any= [];

  addToCart(product:any) {

  this.items.push(product);

    localStorage.setItem('cart',  JSON.stringify (this.items))
  }


  getItems() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
}
