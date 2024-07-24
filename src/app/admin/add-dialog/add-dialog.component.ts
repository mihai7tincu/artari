import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'add-pizza-dialog',
  templateUrl: 'add-dialog.component.html',
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule],
  standalone: true
})
export class AddPizzaDialog {
  constructor(
    public dialogRef: MatDialogRef<AddPizzaDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Pizza,
    private pizzaService: PizzaService) {

    if (!data) {
      data = <Pizza>{};
    }
  }

  onClickYes(): void {
    const model = <Pizza>{
      id: this.data.id,
      name: this.data.name,
      crustSize: parseInt(this.data.crustSize.toString()),
      crustType: parseInt(this.data.crustType.toString()),
      //toppings: this.data.toppings
    };

    this.pizzaService.create(model).subscribe(result => {
      this.dialogRef.close(result);
    });
  }

  onClickNo(): void {
    this.dialogRef.close();
  }
}
