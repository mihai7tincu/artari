import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../faqs/services/pizza.service';
import { Pizza } from '../../faqs/models/pizza.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'product-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent implements OnInit {
  modelId: number = 0;
  model: Pizza = <Pizza>{};

  name = new FormControl('');
  crustSize = new FormControl();
  crustType = new FormControl();
  toppings = new FormControl();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pizzaService: PizzaService) {

    this.route.params.subscribe(params => {
      this.modelId = params['id'];
    });
  }

  ngOnInit(): void {
    this.fetchModel(this.modelId);
  }

  fetchModel(id: number) {
    if (this.modelId) {
      this.pizzaService.get(id).subscribe((result: Pizza) => {
        this.model = result;
        this.initForm();
      });
    }
  }

  initForm() {
    this.name.setValue(this.model.name);
    this.crustSize.setValue(this.model.crustSize);
    this.crustType.setValue(this.model.crustType);
  }

  onClickSave(): void {
    const model = <Pizza>{
      id: this.modelId,
      name: this.name.value,
      crustSize: parseInt(this.crustSize.value.toString()),
      crustType: parseInt(this.crustType.value.toString()),
      //toppings: this.toppings.value
    };

    if (this.model.id) {
      this.pizzaService.edit(model).subscribe(result => {
        this.navigateToList();
      });
    }
    else {
      this.pizzaService.create(model).subscribe(result => {
        this.navigateToList();
      });
    }
  }

  navigateToList() {
    this.router.navigate([`../faqs`]);
  }
}
