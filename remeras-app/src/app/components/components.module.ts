import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { FormsModule } from '@angular/forms';
import { RemeraService } from '../services/remera.service';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ListaProductosComponent,
    DetalleProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [RemeraService],
  exports: [
    NavbarComponent,
    ListaProductosComponent,
    DetalleProductoComponent
  ]
})
export class ComponentsModule { }
