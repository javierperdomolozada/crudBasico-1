import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosygRoutingModule } from './productosyg-routing.module';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosygRoutingModule
  ]
})
export class ProductosygModule { }
