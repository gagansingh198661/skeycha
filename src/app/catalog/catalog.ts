import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../product';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-catalog',
  imports: [MatIconModule,ProductCard,CommonModule],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.css'],
})
export class Catalog {
  slides : Product[] = [
    { url: 'assets/cup1.jpg', title: 'Cup 1' },
    { url: 'assets/cup2.jpg', title: 'Cup 2' },
    { url: 'assets/cup3.jpg', title: 'Cup 3' },
    { url: 'assets/cup4.jpg', title: 'Cup 4' },
    { url: 'assets/cup5.jpg', title: 'Cup 5' },
  ];
}
