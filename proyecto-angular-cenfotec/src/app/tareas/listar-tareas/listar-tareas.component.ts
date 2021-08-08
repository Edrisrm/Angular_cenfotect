import { Component, OnInit } from '@angular/core';
import { TareaServiceService } from 'src/app/service/tarea-service.service';

@Component({
  selector: 'app-listar-tareas',
  templateUrl: './listar-tareas.component.html',
  styleUrls: ['./listar-tareas.component.css']
})
export class ListarTareasComponent implements OnInit {

  tareas:any = []
  public nombre:any;
  constructor(public tareasService: TareaServiceService) { }
  ngOnInit(): void {
    this.tareasService.getTareas().subscribe(data =>{
      console.log(data);
      this.tareas = data;
    })
    this.nombre = "Listado de tareas";
  }
  cargarTareas(){
    this.tareasService.getTareas()
  }

}
