import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Producto } from 'src/app/core/models/producto.model';
import { ProductoService } from 'src/app/core/service/producto.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, AfterViewInit {
  listProductos: Producto[] = [];
  displayedColumns: string[] = ['nombre', 'descripcion', 'valor', 'acciones'];
  dataSource!: MatTableDataSource<Producto>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ProductoService: ProductoService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.listProductos = this.ProductoService.getProductos();
    this.dataSource = new MatTableDataSource(this.listProductos);
  }

  ngAfterViewInit(){
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
eliminarProducto(idProducto: number) {
  console.log('idProducto', idProducto);
  this.ProductoService.eliminarProducto(idProducto);
  this.cargarProductos()
  this._snackBar.open('El producto fue eliminado con exito','',{
    duration:2000,
    horizontalPosition:'center',
    verticalPosition:'bottom'
  })
}

}
