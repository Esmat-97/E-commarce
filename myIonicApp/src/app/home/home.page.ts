import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AddproductsPage } from '../addproducts/addproducts.page';


@Component({
  selector: 'app-home',
  standalone:true,
  imports:[FormsModule , IonicModule ,NgFor,RouterLink,AddproductsPage],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  role:string='';
  email:string='';

  products:any =[];


 constructor(private http:HttpClient ,
  private authservice:AuthService, 
  private router:Router ,
  private cartservice:CartService){}




 ngOnInit(){

this.http.get('http://localhost:1999/getproducts').subscribe( (res:any)=>{
console.log(res);
this.products=res;

this.role=localStorage.getItem('role') as string;
this.email=localStorage.getItem('email') as string;

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


logout(){
  this.authservice.logout();
   }


   addtocart(user :any){
    console.log(user)
    this.cartservice.addToCart(user)
   }

}
