import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosModule } from './eventos/eventos.module';
import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { PrincipalComponent } from './principal/principal.component';
import { TareasModule } from './tareas/tareas.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesService } from './service/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ClientesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NavbarModule,
    FooterModule,
    TareasModule,
    EventosModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
