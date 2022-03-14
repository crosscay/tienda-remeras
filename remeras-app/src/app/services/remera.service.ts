import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemeraService {
  baseUrl: string = environment.baseUrl;
  headers: HttpHeaders = new HttpHeaders({
    "No-Auth": "True",
    "Content-Type": "application/json"
  });
  constructor(private http:HttpClient) { }

  getFiltrarListadoProductos(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}obtener-remeras/${name}`);
  }

  getListadoProductos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
