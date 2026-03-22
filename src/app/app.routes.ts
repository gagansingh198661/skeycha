import { Routes } from '@angular/router';
import { Catalog } from './catalog/catalog';
import { Productpage } from './productpage/productpage';
export const routes: Routes = [
  { path: '', component: Catalog },          // default route
  { path: 'product', component: Productpage } // product detail route
];