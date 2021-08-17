import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }
  private items = new Array<{ nombre: string }>();
  private itemsSubject = new Subject<Array<{ nombre: string }>>();
  //private itemsSubject = new ReplaySubject<Array<{ nombre: string }>>();
  public itemsObservable$ = this.itemsSubject.asObservable();

  crearElemento() {
    //this.items.push({ nombre: 'Ejemplo ' + this.items.length });
    //this.itemsSubject.next(this.items);
    if (this.items.length > 49)
    {
      this.itemsSubject.error("Se superó el tamaño máximo de elementos");
      //this.itemsSubject.complete()
    }
    else
    {
      this.items.push({nombre: 'cliente #' + this.items.length});
      this.itemsSubject.next(this.items);
    }
}

eliminarElmenento(index: number) {
    this.items.splice(index, 1);
    this.itemsSubject.next(this.items);
}
}
