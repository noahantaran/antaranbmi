import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  original: number;
  actual: number;
  markdown: number;
  rate: number;
  

calculateBMI() {
  this.markdown = this.original - this.actual;
  this.rate = (this.markdown/this.actual * 100);
  }
  
}


