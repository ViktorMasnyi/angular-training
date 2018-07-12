import { Injectable } from '@angular/core';
import { Product } from './product-component/product.model';
import { Category } from './product-component/category.enum';

@Injectable()
export class ProductsService {
  constructor() {}
  getproducts() {
    return [
      new Product(
        0,
        'Mixer',
        'best for your kitchen',
        ['plactic', 'copper'],
        200,
        Category.Household
      ),
      new Product(
        1,
        'Boiler',
        'makes cold water hot',
        ['metall', 'copper'],
        250,
        Category.Household
      ),
    ];
  }

  getproduct(): Product {
    const prod = new Product(
      0,
      'Mixer',
      'best for your kitchen',
      ['plactic', 'copper'],
      200,
      Category.Household
    );
    console.log('CL from getproduct()', prod);
    return prod;
  }
}
