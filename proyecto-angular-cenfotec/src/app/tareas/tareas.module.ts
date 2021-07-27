import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTareasComponent } from './listar-tareas/listar-tareas.component';
import { AgregarTareasComponent } from './agregar-tareas/agregar-tareas.component';



@NgModule({
  declarations: [
    ListarTareasComponent,
    AgregarTareasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TareasModule { }
