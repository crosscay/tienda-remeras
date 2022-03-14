import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { RemeraService } from './services/remera.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [RemeraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
