import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Tour'];
  heroeBorrado: string = '';

  borrar(){
   this.heroeBorrado =  this.heroes.shift() || '';
  }

}
