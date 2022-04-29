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

  constructor(private miServicio: CafesService ) { }

  getCafes() {
    this.miServicio.verCafes().subscribe(misdatos => {
      this.misdatos = misdatos;
    });
  }

  ngOnInit() {
    this.getCafes();
  }

}
