import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StoreFirstGuard } from './store-first.guard';
import { CartDetailsComponent } from './store/cart/cart-details/cart-details.component';
import { CheckoutComponent } from './store/cart/checkout/checkout.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, StoreModule, AppRoutingModule
    // RouterModule.forRoot([
    //   {path: "store", component: StoreComponent},
    //   { path: "cart", component: CartDetailsComponent },
    //   { path: "checkout", component: CheckoutComponent },
    //   {path: "**", redirectTo: "/store"}
    // ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
