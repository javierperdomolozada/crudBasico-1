import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosysRoutingModule } from './productosys-routing.module';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosysRoutingModule
  ]
})
export class ProductosysModule { }
