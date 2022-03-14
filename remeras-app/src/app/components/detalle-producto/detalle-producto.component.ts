import { Component, OnInit, Input } from '@angular/core';
import { Remera } from '../../models/remera.model';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {
  @Input() DetalleDelProducto!:Remera;
  constructor() { }

  ngOnInit(): void {
    console.log(this.DetalleDelProducto);
  }

}
