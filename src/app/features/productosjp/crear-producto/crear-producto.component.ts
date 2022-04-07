import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Producto } from 'src/app/core/models/producto.model';
import { ProductoService } from 'src/app/core/service/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  tiles: any = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  foods: any = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  sexo: any[] = ['Masculino','Femenino'];

  valor: any[] = ['100','14900','2300','23000','3200','46100'];

  form: FormGroup;
  listProductos: any;

  constructor(private fb: FormBuilder, 
    private _productoService: ProductoService,
    private router: Router,
    private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      valor: ['', Validators.required],
      imagen: ['', Validators.required]

    })
  }
  

  ngOnInit(): void {
  }
  agregarProducto() {
    console.log(this.form);

    const user: Producto = {
      id: this.form.value.id,
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion,
      valor: this.form.value.valor,
      imagen: this.form.value.imagen,
    }
    console.log(user);
   

    this._productoService.agregarProducto(user);
    this.router.navigate(['/productosjp'])
    this._snackBar.open("El producto fue agregado con exito",'',{
      duration:2000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}
