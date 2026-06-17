import { Routes } from '@angular/router';
import { Catalog } from './catalog/catalog';
import { Productpage } from './productpage/productpage';
import { CheckoutPage } from './checkout-page/checkout-page';
import { Refunds } from './refunds/refunds';
export const routes: Routes = [
  { path: '', component: Catalog },          // default route
  { path: 'product', component: Productpage }, // product detail route
  { path: 'checkout', component: CheckoutPage }, // checkout route
  { path: 'refunds', component: Refunds }, // refunds route
];