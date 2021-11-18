import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutingProviders, routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { DetallesequipoComponent } from './components/detallesequipo/detallesequipo.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { DetallesjugadorComponent } from './components/detallesjugador/detallesjugador.component';
import { ServiceEquipos } from './services/equipo.service';
import { HttpClientModule } from "@angular/common/http";
import { NuevojugadorComponent } from './components/nuevojugador/nuevojugador.component';
import { ApuestasComponent } from './components/apuestas/apuestas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DetallesequipoComponent,
    JugadoresComponent,
    DetallesjugadorComponent,
    NuevojugadorComponent,
    ApuestasComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders, ServiceEquipos],
  bootstrap: [AppComponent]
})
export class AppModule { }
