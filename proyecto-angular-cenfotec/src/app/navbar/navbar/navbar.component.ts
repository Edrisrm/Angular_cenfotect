import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  navbarTitle:string = "MyAgenda";
  home:string = "Home";
  eventos:string = "Eventos";
  tareas:string = "Tareas";
  logo = "../../../assets/My_agenda.png";
  currentValue = true;
  constructor() { }
  ngOnInit(): void {
  }

}
