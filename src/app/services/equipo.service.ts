import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class ServiceEquipos {
    constructor(private _http: HttpClient) {

    }
    getEquipos(): Observable<any> {
        var request = '/api/Equipos';
        var url = Global.urlchampions + request;
        return this._http.get(url);
    }

    getJugadoresEquipo(idEq: string): Observable<any> {
        var request = '/api/Jugadores/JugadoresEquipos/' + idEq;
        var url = Global.urlchampions + request;
        return this._http.get(url);
    }

    getEquipoId(id: string): Observable<any> {
        var request = '/api/Equipos/' + id;
        var url = Global.urlchampions + request;
        return this._http.get(url);
    }

    getJugadorNombre(id: string): Observable<any> {
        var request = '/api/Jugadores/' + id;
        var url = Global.urlchampions + request;
        return this._http.get(url);
    }

    getApuestas(): Observable<any> {
        var request = '/api/Apuestas';
        var url = Global.urlchampions + request;
        return this._http.get(url);
    }

    deleteApuesta(id: number): Observable<any> {
        var request = '/api/Apuestas/' + id;
        var url = Global.urlchampions + request;
        return this._http.delete(url);
    }
}