import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import {MatExpansionModule} from '@angular/material/expansion';
import { Product } from '../dtos/product';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';
import { GuaranteeDto } from '../dtos/GuaranteeDto';
import { Router } from '@angular/router';
import { cartDto } from '../dtos/cartDto';
import { CartItem } from '../cart/cart-item/cart-item';
@Component({
  selector: 'app-productpage',
  imports: [Carousel, MatExpansionModule,ProductCard,
    CommonModule,CartItem],
  templateUrl: './productpage.html',
  styleUrl: './productpage.css',
})
export class Productpage {
  cartOpen: boolean = false;
  colorSelected?:string;
  cardHeight = '200px';
  cardWidth = '200px';
  activeIndex = 0;
  contents : GuaranteeDto[] = [
    { guaranteeTitle: 'Secure Payment', guaranteeDescription: 'Your Payment Information is processed Securely', guaranteeIcon: 'fa-solid fa-shield-halved'},
    { guaranteeTitle: 'Free Shipping', guaranteeDescription: 'Free Pan India Shipping above INR 499 and Returns & duties taxes included', guaranteeIcon: 'fa-solid fa-truck' },
  ];
  slides : Product[] = [
      { url: 'assets/cup1.jpg', title: 'Cup 1' },
      { url: 'assets/cup2.jpg', title: 'Cup 2' },
      { url: 'assets/cup3.jpg', title: 'Cup 3' },
      { url: 'assets/cup4.jpg', title: 'Cup 4' },
      { url: 'assets/cup5.jpg', title: 'Cup 5' },
    ];
  
  cartDtos : cartDto[] = [
    { id : 1,productName: 'Camel Japan Mechanical Pencil',productDescription: 'Black' ,productPrice: '₹499', productImgUrl: 'assets/camel_japan_mechanical_pencil.webp' },
    { id : 2,productName: 'Midori Notebook - A5 - Off White',productDescription: 'Off White', productPrice: '₹599', productImgUrl: 'assets/midori_notebook_ci2.webp' },
    { id : 3,productName: 'Nakabayashi E Fountain Pen',productDescription: 'Blue', productPrice: '₹599', productImgUrl: 'assets/nakabayashi_e_fountain_pen_ci_3.avif' },
    { id : 4,productName: 'Nakabayashi E Fountain Pen',productDescription: 'Blue', productPrice: '₹599', productImgUrl: 'assets/nakabayashi_e_fountain_pen_ci_3.avif' 
    }
  ];  
  optionSelected(option: string): void {
    this.colorSelected = option;
  }

  constructor(private router: Router) {}

   toggleCart(): void {
    // Implement the logic to toggle the cart visibility
    console.log('Cart toggled');
    const cart = document.getElementById('cart');
    const overlay = document.getElementById('overlay');
    const productpageContainer = document.getElementById('productpage-container');
    if (cart && overlay) {
      cart.classList.toggle('open');
      overlay.classList.toggle('open');
      this.cartOpen=!this.cartOpen;
    }
    

  }
  
  setActive(index: number): void {
     console.log('Active index set to:', index);
     this.activeIndex = index;
  }

  openCheckout(): void {
    // Implement the logic to navigate to the checkout page
    console.log('Navigating to checkout page');

    this.router.navigate(['/checkout']);  // always goes to same product page
  }
}
