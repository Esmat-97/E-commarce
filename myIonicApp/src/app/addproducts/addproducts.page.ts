import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addproducts',
  imports:[IonicModule , CommonModule ,FormsModule],
  standalone:true,
  templateUrl: './addproducts.page.html',
  styleUrls: ['./addproducts.page.scss'],
})
export class AddproductsPage  {

  products:any={

  }

  constructor(private htp:HttpClient) { }

  submitForm(main :any ){
    this.products = main.value
    console.log(this.products);
    this.htp.post('http://localhost:1999/insertproduct',this.products).subscribe( (res : any)=>{

    })
  }
  
  }


