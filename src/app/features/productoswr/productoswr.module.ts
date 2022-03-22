import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoswrRoutingModule } from './productoswr-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductoswrRoutingModule,
    MaterialModule
  ]
})
export class ProductoswrModule { }
