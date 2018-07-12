import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model';
import { CartServiceService } from '../cart-service.service';


@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  @Input() product: Product;
  constructor( public cartService: CartServiceService ) {}
  ngOnInit() {
  }
  onBuy() {
    this.cartService.addToBasket(this.product);
    console.log('item was purchased');
  }
}
