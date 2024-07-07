import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ShoppingCartComponent } from './shoppingc-cart/shopping-cart.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { FaqEditComponent } from './faqs/faq-edit/faq-edit.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductsComponent,
  },
  {
    path: 'products/edit/:id',
    pathMatch: 'full',
    component: ProductEditComponent
  },
  //{
  //  path: 'products', component: ProductsComponent,
  //  pathMatch: 'full',
  //  children: [
  //    {
  //      path: 'edit/list',
  //      component: ProductsComponent
  //    },
  //    {
  //      path: 'edit/:id',
  //      component: ProductEditComponent
  //    }]
  //},
  { path: 'promotions', component: PromotionsComponent },
  {
    path: 'faqs',
    pathMatch: 'full',
    component: FaqsComponent
  },
  {
    path: 'faqs/edit/:id',
    pathMatch: 'full',
    component: FaqEditComponent
  },
  { path: 'contact', component: ContactComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent }
];
