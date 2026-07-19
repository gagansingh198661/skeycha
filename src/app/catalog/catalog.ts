import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../dtos/product';
import { ProductCard } from '../product-card/product-card';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Router } from '@angular/router';
import { Carousel } from '../carousel/carousel';
@Component({
  selector: 'app-catalog',
  imports: [MatIconModule,ProductCard,CommonModule,Carousel],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.css'],
})
export class Catalog {
  slides : Product[] = [
    { url: 'assets/product_1.png', title: 'Cup 1' },
    { url: 'assets/product_2.png', title: 'Cup 2' },
    { url: 'assets/product_3.png', title: 'Cup 3' },
    { url: 'assets/product_4.png', title: 'Cup 4' },
    { url: 'assets/product_5.png', title: 'Cup 5' },
    { url: 'assets/product_6.png', title: 'Cup 5' },
    { url: 'assets/product_7.png', title: 'Cup 5' },
    { url: 'assets/product_8.png', title: 'Cup 5' },
  ];

  cardHeight = '192.25px';
  cardWidth = '192.25px';

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

  

  dragging = false;
  dragForClick = false;
  currentScroll: number = 0;
  currentX: number = 0;
  
  onMouseDown(event: MouseEvent) {
    const track = event.target as HTMLElement;
    if(track.classList.contains('product-image')){
      return;
    }
    track.classList.add('active');
    this.currentX = event.screenX;
    console.log("Mouse Down Current X", track);
      this.dragging=true;
      const element=document.getElementsByClassName("catalog-products")[0] as HTMLElement;
      console.log("Mouse Down Current scroll", this.currentScroll);
      if(this.currentScroll!==0){
        element.scrollTo(this.currentScroll,0);
      }
    
    
    
    
  }

  onMouseMove(event: MouseEvent) {
    if (!this.dragging) return;
    
    const element=document.getElementsByClassName("catalog-products")[0] as HTMLElement;
    let deltaX = this.currentX - event.screenX;
    console.log("Element position"+element.scrollLeft);
    console.log("Delta "+deltaX);
    
    element.scrollTo(element.scrollLeft+deltaX,0);
    this.currentScroll=element.scrollLeft;
    
    
    //this.currentScroll+=element.scrollLeft+deltaX;
    this.currentX = event.screenX;
  }

  onMouseUp(event: MouseEvent) {
    
    
    if(this.dragging){
      const track = event.currentTarget as HTMLElement;
      track.classList.remove('active');
      this.dragging=false;
      this.currentX =0;
      //element.scrollTo(this.currentScroll,0);
      console.log("Mouse up Current scroll", this.currentScroll);
      const element=document.getElementsByClassName("catalog-products")[0] as HTMLElement;
      console.log("Current Position"+element.scrollLeft);
      event.stopImmediatePropagation();
    }
  }

  onMouseLeave(event: MouseEvent) {
    if(this.dragging){
      const element=document.getElementsByClassName("catalog-products")[0] as HTMLElement;
      element.classList.remove('active');
      this.dragging=false;
    }
  }
}
