import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss'
})
export class ProductViewComponent implements OnInit {
  data: any = require('../../../assets/data/products.json');
  modelId: number = 0;
  model: Product | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const stringParam = params['id'];
      if (stringParam) {
        this.modelId = parseInt(stringParam);
      }
    });
  }

  ngOnInit(): void {
    const models = this.data.allProducts.filter((x: Product) => x.id === this.modelId);
    if (models)
      this.model = models[0];
  }
}
