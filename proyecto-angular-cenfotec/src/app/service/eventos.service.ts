import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {EventosI} from '../models/eventos';
@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private url = 'http://localhost:4000';
  constructor(private http: HttpClient) { }
  public getEventos():Observable<EventosI[]>{
    return this.http.get<EventosI[]>(this.url+'/eventos');
  }
  public createEventos(eventos:EventosI):Observable<EventosI[]>{
    return this.http.post<EventosI[]>(this.url+'/eventos', eventos);
  }
  public deleteEventos(id:number){
    return this.http.delete(this.url+"/eventos/"+id);
  }
}
