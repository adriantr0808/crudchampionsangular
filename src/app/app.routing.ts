import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DetallesequipoComponent } from './components/detallesequipo/detallesequipo.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { DetallesjugadorComponent } from './components/detallesjugador/detallesjugador.component';
import { ApuestasComponent } from './components/apuestas/apuestas.component';
const appRoutes: Routes = [

    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "detallesequipo/:id", component: DetallesequipoComponent },
    { path: "jugadores/:idEq", component: JugadoresComponent },
    { path: "detallejugador/:id", component: DetallesjugadorComponent },
    { path: "apuestas", component: ApuestasComponent },

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);