import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarouselComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective } from '@coreui/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [ThemeDirective,
    CarouselComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,    
    CarouselItemComponent,
    NgFor,
    RouterLink],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/images/carousel/artari1.jpg'
    };
    this.slides[1] = {
      src: './assets/images/carousel/artari2.jpg'
    };
    this.slides[2] = {
      src: './assets/images/carousel/artari3.jpg'
    };
    this.slides[3] = {
      src: './assets/images/carousel/artari4.jpg'
    };
    this.slides[4] = {
      src: './assets/images/carousel/artari5.jpg'
    };
  }
}
