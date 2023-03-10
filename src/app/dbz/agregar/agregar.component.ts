import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz-interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

@Input() nuevo: Personaje = {
  nombre: '',
  poder: 0
}

@Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

agregar (){
  if ( this.nuevo.nombre.trim().length === 0) { return; }

  this.onNewPersonaje.emit( this.nuevo)

  this.nuevo = {
    nombre: '',
    poder: 0
  }
}

}
