import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import {MatExpansionModule} from '@angular/material/expansion';
@Component({
  selector: 'app-productpage',
  imports: [Carousel, MatExpansionModule],
  templateUrl: './productpage.html',
  styleUrl: './productpage.css',
})
export class Productpage {
  colorSelected?:string;
  optionSelected(option: string): void {
    this.colorSelected = option;
  }
}
