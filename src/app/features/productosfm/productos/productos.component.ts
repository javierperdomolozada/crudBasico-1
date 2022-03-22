import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/models/producto.model';



const ELEMENT_DATA: Producto[] = [
  {
    "id": 1,
    "nombre": "Acelifen",
    "descripcion": "Caja x 100 mg",
    "valor": 100,
    "imagen": "https://www.larebajavirtual.com/images/productos/sii/F/300x300/acelifen_gotas-41601-1642087553.png"
  },
  {
    "id": 2,
    "nombre": "Dolex",
    "descripcion": "Caja x 500 mg",
    "valor": 2300,
    "imagen": "https://larebajavirtual.com/images/productos/sii/F/300x300/dolex_rapida_accion-30282-1615171578.png"
  }
];


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'valor'];
  dataSource = ELEMENT_DATA;

}
