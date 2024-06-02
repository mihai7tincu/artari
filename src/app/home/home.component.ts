import { Component } from '@angular/core';
import { ProductCardComponent } from '../products/product-card/product-card.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
