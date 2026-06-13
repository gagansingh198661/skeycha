import { Component, Input } from '@angular/core';
import { cartDto } from '../../dtos/cartDto';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  @Input() cartDto?: cartDto = {
    productName: '',
    productPrice: '',
    productImgUrl: '',
    id: 0,
    productDescription: ''
  };
}
