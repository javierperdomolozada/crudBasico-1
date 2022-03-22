import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosclpRoutingModule } from './productosclp-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [ProductosComponent],
  imports: [CommonModule, ProductosclpRoutingModule, MaterialModule],
})
export class ProductosclpModule {}
