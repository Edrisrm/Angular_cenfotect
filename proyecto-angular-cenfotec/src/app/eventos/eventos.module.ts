import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEventosComponent } from './listar-eventos/listar-eventos.component';
import { CrearEventosComponent } from './crear-eventos/crear-eventos.component';



@NgModule({
  declarations: [
    ListarEventosComponent,
    CrearEventosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventosModule { }
