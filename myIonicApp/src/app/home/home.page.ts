import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  role:string='';

  products:any =[];


 constructor(private http:HttpClient ,private authservice:AuthService){}

 ngOnInit(){

this.http.get('http://localhost:1999/getproducts').subscribe( (res:any)=>{
console.log(res);
this.products=res;

this.role=localStorage.getItem('role') as string;

})

 }


 logout(){
this.authservice.logout();
 }


}
