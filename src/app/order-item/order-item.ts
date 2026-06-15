import { Component,Input } from '@angular/core';
import { cartDto } from '../dtos/cartDto';

@Component({
  selector: 'app-order-item',
  imports: [],
  templateUrl: './order-item.html',
  styleUrl: './order-item.css',
})
export class OrderItem {
  @Input() orderDto?: cartDto = {
    productName: '',
    productPrice: '',
    productImgUrl: '',
    id: 0,
    productDescription: ''
  };
}
