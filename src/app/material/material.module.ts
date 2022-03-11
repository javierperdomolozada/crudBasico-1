import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos de material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const material = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [material],
})
export class MaterialModule {}
