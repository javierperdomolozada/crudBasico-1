import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoswrRoutingModule } from './productoswr-routing.module';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductoswrRoutingModule
  ]
})
export class ProductoswrModule { }
