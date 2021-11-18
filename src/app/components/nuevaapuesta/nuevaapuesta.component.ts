import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import ServiceApuestas from 'src/app/services/apuesta.service';
import { Apuesta } from 'src/app/models/apuesta';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nuevaapuesta',
  templateUrl: './nuevaapuesta.component.html',
  styleUrls: ['./nuevaapuesta.component.css']
})
export class NuevaapuestaComponent implements OnInit {
  @ViewChild('cajausuario') cajausuario! : ElementRef;
  @ViewChild('cajarmadrid') cajarmadrid! : ElementRef;
  @ViewChild('cajatmadrid') cajatmadrid! : ElementRef;
  @ViewChild('cajafecha') cajafecha! : ElementRef;
  
  constructor(private _service: ServiceApuestas, private _router: Router) { }

  agregarApuesta(): void {
    var id = 0;
    var usu = this.cajausuario.nativeElement.value;
    var res=this.cajarmadrid.nativeElement.value+"-"+this.cajatmadrid.nativeElement.value;
    var fech = this.cajafecha.nativeElement.value;
    
    var ap = new Apuesta(id,usu,res,fech);
    this._service.postApuesta(ap).subscribe(res => {
      this._router.navigate(['/apuestas']);
    });
  }
  ngOnInit(): void {
   
  }

}
