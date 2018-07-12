import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product-component/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: Product;
  constructor( public productsService: ProductsService ) { }

  ngOnInit() {
    this.product = this.productsService.getproduct();
    console.log('from prod-list.ts', this.product);
  }

}
