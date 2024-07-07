import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CartProductsCountService } from '../shoppingc-cart/services/cart-products-count.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavBarComponent implements OnInit {
  totalProducts = 0;
  private onDestroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartProductsCountService: CartProductsCountService
  ) { }

  ngOnInit(): void {
    this.cartProductsCountService.productsCount$.pipe(takeUntil(this.onDestroy$)).subscribe(x => {
      this.totalProducts = x;
    });
  }

  onClickItem(name: string) {
    this.router.navigate([name], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.unsubscribe();
  }
}
