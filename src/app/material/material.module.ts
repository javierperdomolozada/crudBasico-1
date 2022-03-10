import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos de material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const material = [MatCardModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [material],
})
export class MaterialModule {}
