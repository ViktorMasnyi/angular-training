import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product-component/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor( public productsService: ProductsService ) { }

  ngOnInit() {
    this.products = this.productsService.getproducts();
    console.log('from prod-list.ts', this.products);
  }

}
