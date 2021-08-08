import { Component, OnInit } from '@angular/core';
import { TareasI } from '../../models/tareas';

@Component({
  selector: 'app-agregar-tareas',
  templateUrl: './agregar-tareas.component.html',
  styleUrls: ['./agregar-tareas.component.css']
})
export class AgregarTareasComponent implements OnInit {

  tareas: TareasI = {
    nombreTarea: "",
    fecha: "",
  }
  constructor() { }

  ngOnInit(): void {
  }
  agregarTarea(){
    alert("datos guardados en consola");
    console.log(this.tareas.nombreTarea);
    console.log(this.tareas.fecha);
  }

}
