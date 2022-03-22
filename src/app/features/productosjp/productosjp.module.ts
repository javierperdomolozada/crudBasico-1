import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosjpRoutingModule } from './productosjp-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosjpRoutingModule,
    MaterialModule
  ]
})
export class ProductosjpModule { }
