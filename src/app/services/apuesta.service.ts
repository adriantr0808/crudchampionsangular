import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";
import { Apuesta } from "../models/apuesta";
@Injectable()

export default class ServiceApuestas {
    constructor(private _http: HttpClient) {

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
    
    postApuesta(apuesta: Apuesta): Observable<any>{
        var json = JSON.stringify(apuesta);
        var header = new HttpHeaders().set('Content-Type', 'application/json');
        var request = '/api/Apuestas';
        var url = Global.urlchampions + request;
        return this._http.post(url, json, {headers: header});
    }
}
