import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  data: any = require('../../assets/data/products.json');
  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.data.allProducts;
    this.products = this.products.sort((a: Product, b: Product) => a.priority - b.priority);
  }
}
