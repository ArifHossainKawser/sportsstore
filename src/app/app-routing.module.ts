import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreFirstGuard } from './store-first.guard';
import { CartDetailsComponent } from './store/cart/cart-details/cart-details.component';
import { CheckoutComponent } from './store/cart/checkout/checkout.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
      {path: "store", component: StoreComponent, canActivate: [StoreFirstGuard]},
      { path: "cart", component: CartDetailsComponent, canActivate: [StoreFirstGuard] },
      { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
      {path: "**", redirectTo: "/store"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
