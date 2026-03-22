import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  @Input() images : string[] = [];
  @Input() isMobile :boolean = false;
  @Input() topLeft? : string ;
  @Input() topRight? : string ;

  currentIndex: number = 0;

  next(): void {
    if(this.images.length > this.currentIndex + 1){
      this.currentIndex++;
    }
  }

  prev() : void{
    if(this.currentIndex > 0){
      this.currentIndex--;
    }
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
  const scrollLeft = target.scrollLeft;
  const itemWidth = target.clientWidth;

  let index = Math.round(scrollLeft / itemWidth);

  // Clamp to valid range
  if (index < 0) index = 0;
  if (index >= this.images.length) index = this.images.length - 1;

  this.currentIndex = index;
  }
}
