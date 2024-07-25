import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  data: any = require('../../../assets/data/products.json');
  products: Product[] = [];

  constructor() {
    this.products = this.data.allProducts
      .filter((x: Product) => x.isNew === true)
      .sort((a: Product, b: Product) => a > b ? -1 : 1);
  }

  getAll(): Observable<Product[]> {
    return of(this.products);
  }
}
