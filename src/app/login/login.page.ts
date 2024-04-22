import { Component, OnInit, ɵɵclassMapInterpolateV } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:true,
  imports:[FormsModule,CommonModule,IonicModule]
})




export class LoginPage  {

  constructor(private http:HttpClient ,private router:Router){}

  signData:any={};

  gettingData:any=[];


  submitForm(main: any) {
  
    this.signData=main.value;

    this.http.get('http://localhost:1999/getusers').subscribe(  (response :any)=>{

      this.gettingData = response;

   for( let x of this.gettingData){
    
   if (x.email === this.signData.email && x.password === this.signData.password){
   
      this.router.navigate(['/home']);

      localStorage.setItem('email',x.email);
      localStorage.setItem('role',x.role);
      localStorage.setItem('username',x.username);
      
   }
 }



   
    })
  }
 

}
