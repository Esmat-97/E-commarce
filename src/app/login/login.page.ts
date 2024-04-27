import { Component, OnInit, ɵɵclassMapInterpolateV } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:true,
  imports:[FormsModule,CommonModule,IonicModule]
})




export class LoginPage  {

  constructor(private http:HttpClient ,private router:Router , private use:UsersService ){}

  logindata:any={};

  SQLdata:any=[];


  submitForm(main: any) {
  
    this.logindata=main.value;

    this.use.getusers().subscribe(  (response :any)=>{

      this.SQLdata = response;      

   for( let x of this.SQLdata){
    
   if (x.email === this.logindata.email && x.password === this.logindata.password){
   
      this.router.navigate(['/home']);

      localStorage.setItem('email',x.email);
      localStorage.setItem('role',x.role);
      localStorage.setItem('username',x.username);
      localStorage.setItem('user_id',x.user_id);

      
   }
 }



   
    })
  }
 

}
