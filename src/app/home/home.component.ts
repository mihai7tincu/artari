import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../products/product-card/product-card.component'
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeCarouselComponent,
    ProductCardComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  data: any = require('../../assets/data/products.json');
  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.data.newProducts;
  }
}
