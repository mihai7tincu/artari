import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../admin/services/pizza.service';
import { Pizza } from '../../admin/models/pizza.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'faq-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './faq-edit.component.html',
  styleUrl: './faq-edit.component.scss'
})
export class FaqEditComponent implements OnInit {
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
    private pizzaService: PizzaService,
    private formBuilder: FormBuilder) {

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
      this.formGroup = this.formBuilder.group({
          name: [this.model.name, Validators.required],
          crustSize: [this.model.crustSize, [Validators.required, Validators.min(10), Validators.max(40)]],
          crustType: [this.model.crustType, Validators.required],
          toppings: [this.model.toppings]
        });
    }

    this.formGroup.get("crustSize")?.valueChanges.subscribe(x => {
      console.log('crustSize changed: ', x);
    })

    this.formGroup.valueChanges.subscribe(x => {
      console.log('form values changed: ', x);
    })
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
