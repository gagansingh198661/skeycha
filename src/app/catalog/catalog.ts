import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../dtos/product';
import { ProductCard } from '../product-card/product-card';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Router } from '@angular/router';
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

  cardHeight = '200px';
  cardWidth = '200px';

  constructor(private router: Router) {}

  selectedPage: number = 0;
  numberOfPages: number[] = [0,1,2,3,4]; 

  selectPage(index: number): void {
    this.selectedPage = index;
  }

  selectPreviousPage(): void {
    if(this.selectedPage > 0) {
      this.selectedPage --;
    }
    this.updatePageNumber();
  }

  selectNextPage(): void {
    if(this.selectedPage < this.numberOfPages.length - 1) {
      this.selectedPage ++;
    }
    this.updatePageNumber();
  }

  updatePageNumber(): void {
    var elements = document.getElementsByClassName("page-number");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove("selected");
    }
    elements[this.selectedPage].classList.add("selected");
  }

  openProduct() {
    this.router.navigate(['/product']);  // always goes to same product page
  }
}
