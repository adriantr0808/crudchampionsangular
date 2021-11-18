import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceEquipos } from 'src/app/services/equipo.service';
import { Jugador } from 'src/app/models/jugador';
@Component({
  selector: 'app-busquedacomponent',
  templateUrl: './busquedacomponent.component.html',
  styleUrls: ['./busquedacomponent.component.css']
})
export class BusquedacomponentComponent implements OnInit {
  public jugadores!: Array<Jugador>
  constructor(private _activateRoute: ActivatedRoute, private _service: ServiceEquipos) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      if (params['nom'] != null) {
        var nom = params['nom'];
        console.log(nom);
        this._service.getJugadoresNombre(nom).subscribe(res => {
          this.jugadores=res;
          console.log(this.jugadores);
        });

      }
    });
  }

}
