import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosfmRoutingModule } from './productosfm-routing.module';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosfmRoutingModule
  ]
})
export class ProductosfmModule { }
