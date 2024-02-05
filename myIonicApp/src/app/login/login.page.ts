import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:true,
  imports:[FormsModule,CommonModule,IonicModule]
})


export class LoginPage implements OnInit {

  submitForm(formData: any) {
  
    console.log('Form data submitted:', formData);
  }
  constructor() { }

  ngOnInit() {
  }

}
