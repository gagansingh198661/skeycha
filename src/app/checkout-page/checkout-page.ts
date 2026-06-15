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

  toggleAddressInfo(tabName: string): void {
    const addressInfo = document.getElementById('address-info');
    const contactInfo = document.getElementById('contact-info');
    if(tabName === 'address') {
      addressInfo!.style.display = 'block';
      contactInfo!.style.display = 'none';
    } else if(tabName === 'contact') {
      addressInfo!.style.display = 'none';
      contactInfo!.style.display = 'block';
    }
    
  }
}
