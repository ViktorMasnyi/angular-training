import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model';


@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  @Input() product: Product;
  constructor() {
  }
  onBuy() {
    console.log('item was purchased');
  }
  ngOnInit() {
  }
}
