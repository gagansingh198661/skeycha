import { Component } from '@angular/core';
import { cartDto } from '../dtos/cartDto';
import { OrderItem } from '../order-item/order-item';

@Component({
  selector: 'app-checkout-page',
  imports: [OrderItem],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css',
})
export class CheckoutPage {
  cartDtos : cartDto[] = [
      { id : 1,productName: 'Camel Japan Mechanical Pencil',productDescription: 'Black' ,productPrice: '₹499', productImgUrl: 'assets/camel_japan_mechanical_pencil.webp' },
      { id : 2,productName: 'Midori Notebook - A5 - Off White',productDescription: 'Off White', productPrice: '₹599', productImgUrl: 'assets/midori_notebook_ci2.webp' },
      { id : 3,productName: 'Nakabayashi E Fountain Pen',productDescription: 'Blue', productPrice: '₹599', productImgUrl: 'assets/nakabayashi_e_fountain_pen_ci_3.avif' },
      { id : 4,productName: 'Nakabayashi E Fountain Pen',productDescription: 'Blue', productPrice: '₹599', productImgUrl: 'assets/nakabayashi_e_fountain_pen_ci_3.avif' 
      }
    ];

    showItems = false;

  toggleItems(): void {
    this.showItems = !this.showItems;
    const showItemsIcon = document.getElementById('showItemsIcon');
    if(this.showItems) {
      showItemsIcon!.innerHTML="-";
      
    }else{
      showItemsIcon!.innerHTML="+";
      
    }
  }
}
