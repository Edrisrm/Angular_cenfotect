import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/service/eventos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-eventos',
  templateUrl: './listar-eventos.component.html',
  styleUrls: ['./listar-eventos.component.css']
})
export class ListarEventosComponent implements OnInit {
  eventos:any = [];
  constructor(public eventosSrv: EventosService) { }
  ngOnInit(): void {
    this.eventosSrv.getEventos().subscribe(data =>{
      console.log(data);
      this.eventos = data;
    })
  }
  eliminarEvento(eventoId:number){
    Swal.fire({
      title: 'Esta seguro que desea eliminar este elemento',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
      denyButtonText: `No eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventosSrv.deleteEventos(eventoId).subscribe(
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
