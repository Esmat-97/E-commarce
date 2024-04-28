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
this.logindata=main.value

    this.use.selectusers(this.logindata.email , this.logindata.password).subscribe(  responses=>{
     
    const  response =responses[0]

      this.router.navigate(['/home']);

      localStorage.setItem('email',response.email);
      localStorage.setItem('role',response.role);
      localStorage.setItem('username',response.username);
      localStorage.setItem('user_id',response.user_id);


   
    })
  }
 

}
