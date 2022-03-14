import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output } from '@angular/core';
import { BusquedaService } from '../../services/busqueda.service';
import { RemeraService } from '../../services/remera.service';
import { Remera } from '../../models/remera.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {
  @Input() ListadoProductos:Array<Remera> = [];
  @Output() mostrarDetalle = new EventEmitter<Remera>();

  constructor(public busquedaService: BusquedaService, public remeraService: RemeraService) { }

  ngOnInit(): void {
  }

  mostrandoDetalle(producto: Remera) {
    this.mostrarDetalle.emit(producto);
  }

}
