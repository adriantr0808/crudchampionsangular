import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceEquipos } from 'src/app/services/equipo.service';

import { Equipo } from 'src/app/models/equipo';

@Component({
  selector: 'app-detallesequipo',
  templateUrl: './detallesequipo.component.html',
  styleUrls: ['./detallesequipo.component.css']
})
export class DetallesequipoComponent implements OnInit {

  public equipo !: Equipo
  public equipos !: Equipo
  constructor(private _activateRoute: ActivatedRoute, private _service: ServiceEquipos) { }



  cargarEquipo(id: string): void {
    this._service.getEquipoId(id).subscribe(res => {
      this.equipo = res;
    });
  }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      if (params['id'] != null) {
        var id = params['id'];
        this.cargarEquipo(id);

      }
    });
  }

}
