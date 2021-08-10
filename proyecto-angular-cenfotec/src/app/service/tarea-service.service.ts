import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { TareasI } from '../models/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {
  private url = 'http://localhost:4000';
  constructor(private http: HttpClient) { }
  public getTareas():Observable<TareasI[]>{
    return this.http.get<TareasI[]>(this.url+'/tareas');
  }
  public createTareas(tareas:TareasI):Observable<TareasI[]>{
    return this.http.post<TareasI[]>(this.url+'/tareas', tareas);
  }
  public deleteTarea(id:number){
    return this.http.delete(this.url+"/tareas/"+id);
  }
}
