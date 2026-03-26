import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';

@Component({
  selector: 'app-productpage',
  imports: [Carousel],
  templateUrl: './productpage.html',
  styleUrl: './productpage.css',
})
export class Productpage {
  colorSelected?:string;
  optionSelected(option: string): void {
    this.colorSelected = option;
  }
}
