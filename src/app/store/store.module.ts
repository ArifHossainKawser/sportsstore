import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CartComponent } from './cart/cart.component';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { CounterDirective } from './counter.directive';
import { RouterModule } from "@angular/router";


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CartComponent, CartDetailsComponent, CheckoutComponent, CounterDirective,],
    exports: [StoreComponent, CartComponent, CartDetailsComponent,]
})
export class StoreModule{}
