import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz-interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegueta',
      poder: 7500
    }
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }
  
  addNewPersonaje( personaje: Personaje) {
    // debugger;
    this.personajes.push( personaje )
  }

}
