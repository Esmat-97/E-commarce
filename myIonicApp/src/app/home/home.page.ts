import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  info:any;

  constructor() {
    fetch("https://dummyjson.com/products")
    .then(Response=>Response.json())
    .then(data=>{console.log(data.products)
       this.info= data.products})
  }

}
