import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child-box',
  standalone: true,
  imports: [],
  templateUrl: './child-box.component.html',
  styleUrl: './child-box.component.scss'
})
export class ChildBoxComponent {
  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  onClickIncrement(): void {
    this.countChange.emit(this.count + 1);
  }
}
