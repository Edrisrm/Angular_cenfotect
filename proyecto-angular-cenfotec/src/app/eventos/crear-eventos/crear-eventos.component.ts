import { Component, OnInit } from '@angular/core';
import { EventosI } from 'src/app/models/eventos';
import { EventosService } from 'src/app/service/eventos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-eventos',
  templateUrl: './crear-eventos.component.html',
  styleUrls: ['./crear-eventos.component.css']
})
export class CrearEventosComponent implements OnInit {
  eventosModel: EventosI = {
    nombreEvento: "",
    descripcion: "",
    fecha: "",
  }
  constructor(public srvEvento: EventosService) { }

  ngOnInit(): void {
  }
  agregarEvento(){

    this.srvEvento.createEventos(this.eventosModel).subscribe(
      (response:EventosI[]) => {
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
