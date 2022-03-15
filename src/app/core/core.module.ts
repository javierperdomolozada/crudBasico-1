import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { HomeComponent } from './home/home.component';
import { PaginaNoExisteComponent } from './pagina-no-existe/pagina-no-existe.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CabeceraComponent, HomeComponent, PaginaNoExisteComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [CabeceraComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    //Es importante garantizar que el Core module solo se importe una vez
    if (parentModule) {
      throw new Error(
        'CoreModule ya esta cargado. Debe ser importado solo en AppModule.'
      );
    }
  }
}
