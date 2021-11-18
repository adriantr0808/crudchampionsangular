import { Component, OnInit } from '@angular/core';
import { ServiceEquipos } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/models/equipo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public equipos!: Array<Equipo>;

  constructor(private _service: ServiceEquipos) { }

  ngOnInit(): void {
    this._service.getEquipos().subscribe(res => {
      this.equipos = res;
      console.log(this.equipos);
    })
  }

}
