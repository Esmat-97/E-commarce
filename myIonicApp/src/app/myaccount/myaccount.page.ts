import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-myaccount',
  standalone:true,
  imports:[IonicModule],
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {

  role:string="";
  username:string="";
  email:string="";

  ngOnInit(): void {
    this.role=localStorage.getItem('role') as string;
    this.username=localStorage.getItem('username') as string;
    this.email=localStorage.getItem('email') as string;
  }

 

}
