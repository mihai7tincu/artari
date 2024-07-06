import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Pizza } from './models/pizza.model';
import { PizzaService } from './services/pizza.service';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'crustSize', 'crustType', 'toppings'];
  dataSource: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {

    this.pizzaService.getAll().subscribe(response => {
      this.dataSource = response;
    });
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
}
