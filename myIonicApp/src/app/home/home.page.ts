import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[FormsModule , IonicModule ,NgFor],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  role:string='';

  products:any =[];


 constructor(private http:HttpClient ,private authservice:AuthService, private router:Router){}


 logout(){
  this.authservice.logout();
   }



 ngOnInit(){

this.http.get('http://localhost:1999/getproducts').subscribe( (res:any)=>{
console.log(res);
this.products=res;

this.role=localStorage.getItem('role') as string;

})

 }



del(id : number){
  console.log(`${id}`)
this.http.delete(`http://localhost:1999/delproduct?id=${id}`).subscribe( (response)=>{
})
}



UpdateForm(id :number){
this.router.navigate(['/updateproduct',id])
}

}
