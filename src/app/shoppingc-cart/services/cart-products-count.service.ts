import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartProductsCountService {
  totalProducts = 0;
  private productsCountSubject = new BehaviorSubject<number>(this.totalProducts);
  productsCount$: Observable<number>;

  constructor() {
    this.productsCount$ = this.productsCountSubject.asObservable();
  }

  updateProductsNo(addedProductsCount: number) {
    this.totalProducts += addedProductsCount;
    this.productsCountSubject.next(this.totalProducts);
  }
}
