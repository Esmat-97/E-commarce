import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports:[NgFor],
  standalone:true,
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private htp:HttpClient) { }

  admins:any=[];
  customers:any=[];
  users:any=[];
  products:any=[];
  allusers:any=[];
  allproducts:any=[];


  currentadmins:number=0;
  currentcustomers:number=0;
  currentusers:number=0;
  currentproducts:number=0;
  totalusers:number=0;
  totalproducts:number=0;


  ngOnInit() {

    this.htp.get('http://localhost:1999/currentusers').subscribe( (res :any )=>{
      this.users=res;
      this.users.forEach((user: any) => {
        console.log( this.currentusers=user['COUNT (email)']);
      });
      
    })


    this.htp.get('http://localhost:1999/currentproducts').subscribe( (res :any )=>{
      this.products=res;
      this.products.forEach((user: any) => {
        console.log( this.currentproducts=user['COUNT (product_name)']);
      });
      
    })



    this.htp.get('http://localhost:1999/totalusers').subscribe( (res :any )=>{
      this.allusers=res;
      this.allusers.forEach((user: any) => {
        console.log( this.totalusers=user['MAX (user_id)']);
      });
      
    })



    this.htp.get('http://localhost:1999/totalproducts').subscribe( (res :any )=>{
      this.allproducts=res;
      this.allproducts.forEach((user: any) => {
        console.log( this.totalproducts=user['MAX (product_id)']);
      });
      
    })



    this.htp.get('http://localhost:1999/customers').subscribe( (res :any )=>{
      this.customers=res;
      this.customers.forEach((user: any) => {
        console.log( this.currentcustomers=user['COUNT (email)']);
      });
      
    })



    this.htp.get('http://localhost:1999/admins').subscribe( (res :any )=>{
      this.admins=res;
      this.admins.forEach((user: any) => {
        console.log( this.currentadmins=user['COUNT (email)']);
      });
      
    })


  }

}
