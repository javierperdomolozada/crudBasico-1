import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosfmRoutingModule } from './productosfm-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosfmRoutingModule,
    MaterialModule
  ]
})
export class ProductosfmModule { }
