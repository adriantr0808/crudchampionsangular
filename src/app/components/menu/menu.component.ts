import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceEquipos } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/models/equipo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public equipos!: Array<Equipo>;
  public nombrejugador!: string;
  @ViewChild('cajajugador') cajajugador!: ElementRef;

  constructor(private _service: ServiceEquipos, private _router: Router) { }

  busquedaJugadores(): void {
    var nom = this.cajajugador.nativeElement.value;
    this._router.navigate(['/buscar',nom]);
  }
  ngOnInit(): void {
    this._service.getEquipos().subscribe(res => {
      this.equipos = res;
     
    })
  }

}
