import { Component, HostListener, Output } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1s 200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {

  julioGallery = [
    { src: 'assets/images/julio1.jpg', caption: 'Julio stride 1' },
    { src: 'assets/images/julio2.jpg', caption: 'Julio stride 2' },
    { src: 'assets/images/julio3.jpg', caption: 'Julio stride 3' },
    { src: 'assets/images/julio4.jpg', caption: 'Julio stride 4' }
  ];

  visibleLightbox = false;
  clickedIndex = 0;
  visibleCount = 4;

  openLightbox(index: number) {
    this.clickedIndex = index;
    this.visibleLightbox = true;
  }




}
