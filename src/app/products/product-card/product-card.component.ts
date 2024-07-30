import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductSpeciesNames, ProductSpeciesShortNames, ProductTypeNames, ProductTypeShortNames } from '../../models/product-type.enum';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: Product = <Product>{};
  @Input() new: string | undefined;

  constructor(private router: Router) { }

  getName(): string {    
    if (this.product.name.length >= 23) {
      var type = ProductTypeShortNames[this.product.type];
      var species = ProductSpeciesShortNames[this.product.species];
      return `${type}${species}`;
    } {
      var type = ProductTypeNames[this.product.type];
      var species = ProductSpeciesNames[this.product.species];
      return `${type} ${species}`;
    }
  }

  getFullName() {
    var type = ProductTypeNames[this.product.type];
    var species = ProductSpeciesNames[this.product.species];
    
    return `${type} ${species} ${this.product.cultivar}`;
  }

  onClickProductCard(item: Product): void {
    this.router.navigate([`products/view/${item.id}`]);
  }
}
