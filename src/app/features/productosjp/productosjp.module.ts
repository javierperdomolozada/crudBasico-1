import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosjpRoutingModule } from './productosjp-routing.module';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosjpRoutingModule
  ]
})
export class ProductosjpModule { }
