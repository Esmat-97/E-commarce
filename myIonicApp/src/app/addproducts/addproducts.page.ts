import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addproducts',
  imports:[IonicModule , CommonModule ,FormsModule],
  standalone:true,
  templateUrl: './addproducts.page.html',
  styleUrls: ['./addproducts.page.scss'],
})
export class AddproductsPage  {

  constructor() { }

  ngOnInit() {
  }

}
