import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosysRoutingModule } from './productosys-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosysRoutingModule,
    MaterialModule
  ]
})
export class ProductosysModule { }
