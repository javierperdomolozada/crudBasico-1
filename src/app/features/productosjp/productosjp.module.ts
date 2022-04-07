import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosjpRoutingModule } from './productosjp-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProductosComponent,
    CrearProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosjpRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class ProductosjpModule { }
