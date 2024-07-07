import { Component } from '@angular/core';
import { ChildBoxComponent } from '../child-box/child-box.component';

@Component({
  selector: 'parent-box',
  standalone: true,
  imports: [ChildBoxComponent],
  templateUrl: './parent-box.component.html',
  styleUrl: './parent-box.component.scss'
})
export class ParentBoxComponent {
  counterOnParent = 0;

  onClickIncrement() {
    this.counterOnParent += 1;
  }
}
