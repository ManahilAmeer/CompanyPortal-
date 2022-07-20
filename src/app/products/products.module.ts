import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { CartComponent } from './cart.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
