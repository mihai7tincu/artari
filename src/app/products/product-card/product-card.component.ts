import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductSpecies, ProductSpeciesNames, ProductSpeciesShortNames, ProductType, ProductTypeNames, ProductTypeShortNames } from '../../models/product-type.enum';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = <Product>{};

  ngOnInit(): void { }

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
}
