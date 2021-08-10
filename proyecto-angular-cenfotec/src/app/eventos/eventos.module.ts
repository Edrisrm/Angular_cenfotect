import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEventosComponent } from './listar-eventos/listar-eventos.component';
import { CrearEventosComponent } from './crear-eventos/crear-eventos.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListarEventosComponent,
    CrearEventosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class EventosModule { }
