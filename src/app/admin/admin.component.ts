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
import { AddPizzaDialog } from './add-dialog/add-dialog.component';
import { Pizza } from './models/pizza.model';
import { PizzaService } from './services/pizza.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartProductsCountService } from '../shoppingc-cart/services/cart-products-count.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatTableModule, MatInputModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'crustSize', 'crustType', 'toppings', 'actions'];
  dataSource: Pizza[] = [];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private pizzaService: PizzaService,
    private cartProductsCountService: CartProductsCountService) {

    this.fetchDataSource();
  }

  ngOnInit(): void {
    this.dataSource.push(
      <Pizza>{
        id: 1,
        name: 'Diavola',
        crustSize: 32,
        crustType: 1,
        toppings: [1, 2]
      });
  }

  fetchDataSource() {
    this.pizzaService.getAll().subscribe(response => {
      this.dataSource = response;
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

