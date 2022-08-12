import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[]= ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado: string[] = [];

  borrarHeroe(index:number):void{
    this.heroeBorrado =this.heroes.splice(index, 1);
  }
}
