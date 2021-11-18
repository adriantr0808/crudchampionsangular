import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceEquipos } from 'src/app/services/equipo.service';
@Component({
  selector: 'app-detallesjugador',
  templateUrl: './detallesjugador.component.html',
  styleUrls: ['./detallesjugador.component.css']
})
export class DetallesjugadorComponent implements OnInit {

  constructor(private _activateRoute: ActivatedRoute, private _service: ServiceEquipos) { }


  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      if (params['id'] != null) {
        var id = params['id'];
        console.log(id);
      }
    });
  }

}
