import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../dtos/product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  imports: [MatIconModule,CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCard {
  @Input() products : Product[] = [];
  @Input() currentIndex: number = 0;
  selectedDotIndex: number | null = null;

  constructor(private router: Router) {}


  selectDot(index: number): void {
    this.selectedDotIndex = index;
    this.currentIndex = index;
  }

   getSelectedUrl(): string {
    return this.products[this.currentIndex].url;
  }

  addToCart(): void {
    console.log('Product added to cart!');
    // Here you can push to a cart array, emit an event, or call a service
  }

  openProduct(event: MouseEvent) {
   // if(!this.dragForClick){
      this.router.navigate(['/product']);  // always goes to same product page
    // }else{
    //   event.preventDefault();
    //   event.stopImmediatePropagation();
    //   this.dragForClick=false;
    //   return; 
    // }
    
  }

  
}
