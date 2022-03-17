import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosclpRoutingModule } from './productosclp-routing.module';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosclpRoutingModule
  ]
})
export class ProductosclpModule { }
