import { Component, OnInit } from '@angular/core';
import ServiceApuestas from 'src/app/services/apuesta.service';
import { Apuesta } from 'src/app/models/apuesta';
@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {
  public apuestas!: Array<Apuesta>;
  public display!: string;
  public id!: string;
  constructor(private _service: ServiceApuestas) {
    this.display = 'none';

  }

  eliminarApuesta(id: number): void {
    this._service.deleteApuesta(id).subscribe(res => {
      this.cargarApuestas();
    });
  }

  

  cargarApuestas(): void {
    this._service.getApuestas().subscribe(res => {
      this.apuestas = res;
    });
  }
  ngOnInit(): void {
    this.cargarApuestas();
  }

}
