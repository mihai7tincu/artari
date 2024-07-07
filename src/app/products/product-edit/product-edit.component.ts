import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../faqs/services/pizza.service';
import { Pizza } from '../../faqs/models/pizza.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ParentBoxComponent } from '../parent-box/parent-box.component';

@Component({
  selector: 'product-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ParentBoxComponent],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent implements OnInit {
  modelId: number = 0;
  model: Pizza | null = null;
  formGroup: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    crustSize: new FormControl(null, [Validators.required, Validators.min(10), Validators.max(40)]),
    crustType: new FormControl(null, Validators.required),
    toppings: new FormControl(null)
  });

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
    if (this.model) {
      this.formGroup = new FormGroup({
        name: new FormControl(this.model.name, Validators.required),
        crustSize: new FormControl(this.model.crustSize, [Validators.required, Validators.min(10), Validators.max(40)]),
        crustType: new FormControl(this.model.crustType, Validators.required),
        toppings: new FormControl(this.model.toppings)
      });
    }
  }

  onClickSave(): void {
    console.log(this.formGroup);

    if (this.formGroup?.invalid)
      return;

    const model = <Pizza>{
      id: this.modelId,
      name: this.formGroup?.controls['name'].value,
      crustSize: parseInt(this.formGroup?.controls['crustSize'].value.toString()),
      crustType: parseInt(this.formGroup?.controls['crustType'].value.toString()),
      //toppings: this.toppings.value
    };

    if (this.model !== null && this.model.id > 0) {
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
