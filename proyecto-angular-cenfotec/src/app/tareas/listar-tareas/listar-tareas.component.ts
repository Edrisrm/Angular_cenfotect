import { Component, OnInit } from '@angular/core';
import { TareaServiceService } from 'src/app/service/tarea-service.service';
import Swal from 'sweetalert2';
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
  eliminarTarea(tareaId:number){
    Swal.fire({
      title: 'Esta seguro que desea eliminar este elemento',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
      denyButtonText: `No eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.tareasService.deleteTarea(tareaId).subscribe(
          (response) =>{
            console.log(response);
            this.ngOnInit();
          }
        )
        Swal.fire('Eliminado exitosamente!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Los cambios no han sido aplicados', '', 'info')
      }
    })
    
  }

}
