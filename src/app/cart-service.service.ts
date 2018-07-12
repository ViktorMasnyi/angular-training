import { Injectable } from '@angular/core';
import { Product } from './product-component/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  basket = [];
  constructor() { }
  addToBasket(product: Product) {
    this.basket.push(product);
    console.log('added to cart, cart contains', this.basket);
  }
}
