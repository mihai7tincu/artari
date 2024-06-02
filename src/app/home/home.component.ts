import { Component } from '@angular/core';
import { ProductCardComponent } from '../products/product-card/product-card.component'
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeCarouselComponent,
    ProductCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
