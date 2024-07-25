import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductSpeciesNames, ProductTypeNames } from '../models/product-type.enum';
import { Product } from '../models/product.model';
import { CartProductsCountService } from '../shoppingc-cart/services/cart-products-count.service';
import { AddPizzaDialog } from './add-dialog/add-dialog.component';
import { Pizza } from './models/pizza.model';
import { PizzaService } from './services/pizza.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatTableModule, MatInputModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'typeName', 'speciesName', 'cultivar', 'price', 'priority', 'actions'];
  dataSource: Product[] = [];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private pizzaService: PizzaService,
    private productService: ProductService,
    private cartProductsCountService: CartProductsCountService) {

    this.fetchDataSource();
  }

  ngOnInit(): void { }

  fetchDataSource() {
    this.productService.getAll().subscribe(response => {
      this.dataSource = response.map((item: Product) => (<Product>{
        ...item,
        speciesName: ProductSpeciesNames[item.species],
        typeName: ProductTypeNames[item.type],
      }));     
    });
  }

  onClickAdd() {
    const dialogRef = this.dialog.open(AddPizzaDialog, {
      width: '450px',
      data: <Pizza>{}
    });

    dialogRef.afterClosed().subscribe((result: number) => {
      this.fetchDataSource();
    });
  }

  onClickDelete(id: number) {
    this.pizzaService.delete(id).subscribe((response: number) => {
      this.fetchDataSource();
    });
  }

  onClickEdit(id: number) {
    //this.router.navigate([`../products/edit/${id}`]);
    this.router.navigate([`faqs/edit/${id}`]);
  }

  onClickAddToCart(id: number) {
    this.cartProductsCountService.updateProductsNo(1);
  }
}

