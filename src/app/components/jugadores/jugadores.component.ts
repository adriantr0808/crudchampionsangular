import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceEquipos } from 'src/app/services/equipo.service';
@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  public jugadores!: Array<Jugador>;
  constructor(private _activateRoute: ActivatedRoute, private _service: ServiceEquipos) { }

  cargarJugadores(id: string): void {
    this._service.getJugadoresEquipo(id).subscribe(res => {
      this.jugadores = res;
      console.log(this.jugadores);
    });
  }
  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      if (params['idEq'] != null) {
        var id = params['idEq'];
        this.cargarJugadores(id);

      }
    });
  }

}
