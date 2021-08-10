import { Component, OnInit } from '@angular/core';
import { TareaServiceService } from 'src/app/service/tarea-service.service';
import Swal from 'sweetalert2';
import { TareasI } from '../../models/tareas';
@Component({
  selector: 'app-agregar-tareas',
  templateUrl: './agregar-tareas.component.html',
  styleUrls: ['./agregar-tareas.component.css']
})
export class AgregarTareasComponent implements OnInit {

  tareasModel: TareasI = {
    nombreTarea: "",
    fecha: "",
  }
  constructor(private srvTareas: TareaServiceService) { }

  ngOnInit(): void {
  }
  agregarTarea(){

    this.srvTareas.createTareas(this.tareasModel).subscribe(
      (response:TareasI[]) => {
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(response);
      }
    );
    return false;
  }

}
