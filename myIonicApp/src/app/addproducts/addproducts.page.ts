
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-addproducts',
  imports:[IonicModule , CommonModule ,FormsModule],
  standalone:true,
  templateUrl: './addproducts.page.html',
  styleUrls: ['./addproducts.page.scss'],
})
export class AddproductsPage  {

  product:any={};

  selectedFile: File | null = null; // Store the selected file

  imageName:string='';

  constructor(private htp:HttpClient) { }

 
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]; // Get the first file selected by the user
    if (this.selectedFile) {
     this.imageName = this.selectedFile.name; // Extract the file name
      console.log('Selected file name:', this.imageName);
    }
  }



  submitForm(main :any ){

    this.product=main.value;

    if (this.selectedFile) {
      this.product.image = this.imageName;
    }

    console.log(this.product);
 
    this.htp.post('http://localhost:1999/insertproduct',this.product).subscribe( response=>{

    })
  }

  
  }
