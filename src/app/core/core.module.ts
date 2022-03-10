import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  declarations: [CabeceraComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CabeceraComponent],
})
export class CoreModule {}
