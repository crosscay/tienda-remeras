import { Component, OnInit } from '@angular/core';
import { RemeraService } from '../../services/remera.service';
import { Remera } from '../../models/remera.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ListadoProducto:Array<Remera> = [];
  visibleListado: boolean = true;
  visibleDetalleProducto: boolean = false;
  productoDetalle!: Remera;
  constructor(private remeraService: RemeraService) { }

  ngOnInit(): void {
    this.obtenerRemeras();
  }

  obtenerRemeras() {
    this.remeraService.getListadoProductos().subscribe((data: any) => {
      console.log(data);
      this.ListadoProducto = data;
    }, (error: any) => {
      console.log(error);
    });
  }

  obtenerProductoFilter(event: string) {
    this.visibleListado = true;
    this.visibleDetalleProducto = false;
    console.log(event);
    this.remeraService.getFiltrarListadoProductos(event).subscribe((data: any) => {
      // console.log(data);
      this.ListadoProducto = data;
      console.log(this.ListadoProducto);
    }, (error: any) => {
      console.log(error);
    });
  }

  mostrarDetalle(event: Remera) {
    this.visibleListado = false;
    this.visibleDetalleProducto = true;
    this.productoDetalle = event;
  }

}
