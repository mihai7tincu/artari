import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ShoppingCartComponent } from './shoppingc-cart/shopping-cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent }
];
