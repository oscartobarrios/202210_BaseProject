import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';
import { CafesService } from './cafes.service';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit {

  misdatos: Array<Cafe> =[];
  total: number = 0;
  blend: number = 0;

  constructor(private miServicio: CafesService ) { }

  getCafes() {
    this.miServicio.verCafes().subscribe(misdatos => {
      this.misdatos = misdatos;

      for(let i = 0 ; i < this.misdatos.length ; i++){
        if (this.misdatos[i].tipo.match( 'Blend') === null) {
            this.total++;
          }
          else{
            this.blend++;
          }

      }

    });
  }

  ngOnInit() {
    this.getCafes();
  }

}
