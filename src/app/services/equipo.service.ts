import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";
import { Jugador } from "../models/jugador";


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


    postJugadir(jugador: Jugador): Observable<any>{
        var json = JSON.stringify(jugador);
        var header = new HttpHeaders().set('Content-Type', 'application/json');
        var request = '/api/Jugadores';
        var url = Global.urlchampions + request;
        return this._http.post(url, json, {headers: header});
    }

    getJugadoresNombre(nom:string): Observable<any>{
        var request ='​/api/Jugadores/BuscarJugadores/'+nom;
        var url = Global.urlchampions+request;
        return this._http.get(url);
    }

    getJugadores(): Observable<any>{
        var request='/api/Jugadores';
        var url = Global.urlchampions+request;
        return this._http.get(url);
    }
   
}