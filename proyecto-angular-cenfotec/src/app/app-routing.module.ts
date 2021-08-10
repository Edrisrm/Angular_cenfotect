import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEventosComponent } from './eventos/crear-eventos/crear-eventos.component';
import { ListarEventosComponent } from './eventos/listar-eventos/listar-eventos.component';
import { PrincipalComponent } from './principal/principal.component';
import { AgregarTareasComponent } from './tareas/agregar-tareas/agregar-tareas.component';
import { ListarTareasComponent } from './tareas/listar-tareas/listar-tareas.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'tareas', component: ListarTareasComponent},
  {path: 'agregar-tarea', component: AgregarTareasComponent},
  {path: 'eventos', component: ListarEventosComponent},
  {path: 'agregar-evento', component: CrearEventosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
