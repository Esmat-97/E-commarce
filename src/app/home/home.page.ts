import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ProductsPage } from '../products/products.page';


@Component({
  selector: 'app-home',
  standalone:true,
  imports:[IonicModule ,RouterLink,ProductsPage],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  role:string='';
  email:string='';

  constructor(
    private authservice:AuthService, 
    private router:Router ){}
  
ngOnInit(){
  this.role=localStorage.getItem('role') as string;
this.email=localStorage.getItem('email') as string;
}

  logout(){
    this.authservice.logout();
     }
}
