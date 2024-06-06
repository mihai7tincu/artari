import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = <Product>{};

  ngOnInit(): void {
  }

  hasLongName(): boolean {
    return (this.product.name.length + this.product.cultivar.length) >= 22;
  }
}
