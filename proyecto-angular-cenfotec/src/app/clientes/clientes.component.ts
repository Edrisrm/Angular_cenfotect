import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientesService } from '../service/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  public items: any;
  public contador = 0;
  public subscription: Subscription | undefined;
  constructor(private clientesSRV: ClientesService) { }

  ngOnInit() {
    this.subscription = this.clientesSRV.itemsObservable$
    .subscribe((items: Array<{ nombre: string }>) => { this.items = items;},
        err => console.log("Se encontró el siguiente error: " + err),
        () => console.log("El observable esta completo!"));
    this.subscription = this.clientesSRV.itemsObservable$
        .subscribe((items: Array<{ nombre: string }>) => {
          this.contador = items.length;
        });
}
ngOnDestroy() {
  if (this.subscription) {
      this.subscription.unsubscribe();
  }
}
crearElemento() {
  this.clientesSRV.crearElemento();
}
eliminarElemento(index: number) {
  this.clientesSRV.eliminarElmenento(index);
}
}
