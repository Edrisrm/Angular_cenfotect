import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTareasComponent } from './listar-tareas/listar-tareas.component';
import { AgregarTareasComponent } from './agregar-tareas/agregar-tareas.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListarTareasComponent,
    AgregarTareasComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TareasModule { }
