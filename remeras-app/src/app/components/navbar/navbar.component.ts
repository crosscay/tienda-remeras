import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output } from '@angular/core';
import { BusquedaService } from '../../services/busqueda.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // resultadoBusqueda: string = "";
  @Input() nombreHijo: string = '';
  @Output() resultadoBusqueda = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  enviarBusqueda() {
    this.resultadoBusqueda.emit(this.nombreHijo);
    // console.log(this.busquedaService.resultadoBusqueda);
  }

}
