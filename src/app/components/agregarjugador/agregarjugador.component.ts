import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceEquipos } from 'src/app/services/equipo.service';
import { Equipo	 } from 'src/app/models/equipo';
import { Jugador } from 'src/app/models/jugador';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-agregarjugador',
  templateUrl: './agregarjugador.component.html',
  styleUrls: ['./agregarjugador.component.css']
})
export class AgregarjugadorComponent implements OnInit {
@ViewChild('cajanombre') cajanombre!: ElementRef;
@ViewChild('cajaposicion') cajaposicion!: ElementRef;
@ViewChild('cajaimg') cajaimg!: ElementRef;
@ViewChild('cajafecha') cajafecha!: ElementRef;
@ViewChild('cajaequipo') cajaequipo!: ElementRef;
@ViewChild('cajapais') cajapais!: ElementRef;

public equipos!: Array<Equipo>;
public lastPK!: number;
public selectedFile!: File;

  constructor(private _service: ServiceEquipos, private _router: Router, private http: HttpClient) { }
  agregarJugador():void{
    var id=0;
    var nom = this.cajanombre.nativeElement.value;
    var pos = this.cajaposicion.nativeElement.value;
    var img = this.cajaimg.nativeElement.value;
    var fech = this.cajafecha.nativeElement.value;
    var pa = this.cajapais.nativeElement.value;
    var eq = this.cajaequipo.nativeElement.value;

    var jug = new Jugador(id,nom,pos,img,fech,pa,eq);
   
    this._service.postJugadir(jug).subscribe(res => {
      this._router.navigate(['/detallesequipo/'+eq]);
    });
  }

  onFileSelected(event:any){
   this.selectedFile = event.target.files[0];
  }


  ngOnInit(): void {
    this._service.getEquipos().subscribe(res => {
      this.equipos=res;
    });

    
  }

}
