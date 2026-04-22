import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import {MatExpansionModule} from '@angular/material/expansion';
import { Product } from '../product';
import { ProductCard } from '../product-card/product-card';
@Component({
  selector: 'app-productpage',
  imports: [Carousel, MatExpansionModule,ProductCard],
  templateUrl: './productpage.html',
  styleUrl: './productpage.css',
})
export class Productpage {
  colorSelected?:string;
  cardHeight = '200px';
  cardWidth = '200px';
  slides : Product[] = [
      { url: 'assets/cup1.jpg', title: 'Cup 1' },
      { url: 'assets/cup2.jpg', title: 'Cup 2' },
      { url: 'assets/cup3.jpg', title: 'Cup 3' },
      { url: 'assets/cup4.jpg', title: 'Cup 4' },
      { url: 'assets/cup5.jpg', title: 'Cup 5' },
    ];
  optionSelected(option: string): void {
    this.colorSelected = option;
  }
}
