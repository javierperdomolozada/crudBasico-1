import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PaginaNoExisteComponent } from './core/pagina-no-existe/pagina-no-existe.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'productosclp',
    loadChildren: () =>
      import('./features/productosclp/productosclp.module').then(
        (m) => m.ProductosclpModule
      ),
  },
  {
    path: 'productoswr',
    loadChildren: () =>
      import('./features/productoswr/productoswr.module').then(
        (m) => m.ProductoswrModule
      ),
  },
  { path: '**', component: PaginaNoExisteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
