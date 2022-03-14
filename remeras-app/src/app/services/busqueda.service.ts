import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  resultadoBusqueda: string = '';
  constructor() { }
}
