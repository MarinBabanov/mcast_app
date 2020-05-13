import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ias(){
    this.router.navigate(['ias']);
  }

  ibmc(){
    this.router.navigate(['ibmc']);
  }

  ics(){
    this.router.navigate(['ics']);
  }

  ica(){
    this.router.navigate(['ica']);
  }

  iet(){
    this.router.navigate(['iet']);
  }

  iict(){
    this.router.navigate(['iict']);
  }

  gozo(){
    this.router.navigate(['gozo']);
  }

  generic(){
    this.router.navigate(['generic']);
  }

  masters(){
    this.router.navigate(['masters']);
  }

  cpd(){
    this.router.navigate(['cpd']);
  }

  
 

}
