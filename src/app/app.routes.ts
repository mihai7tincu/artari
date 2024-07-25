import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { ShoppingCartComponent } from './shoppingc-cart/shopping-cart.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { FaqEditComponent } from './admin/faq-edit/faq-edit.component';
import { ProductViewComponent } from './products/product-view/product-view.component';

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
  {
    path: 'products/view/:id',
    pathMatch: 'full',
    component: ProductViewComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
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
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  }
];
