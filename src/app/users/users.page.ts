import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-users',
  imports:[IonicModule,CommonModule],
  standalone:true,
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})

export class UsersPage  {

  productlist:any=[];

  constructor(private use:UsersService , private router:Router ,private htpp:HttpClient) { }

/* get */

  ngOnInit() {
    this.use.getusers().subscribe( (res :any ) =>{
    console.log(res);
    this.productlist=res;
    })
    
  }

  /* delete */

  del(id :number){
    console.log(`${id}`)
    this.use.delusers(id).subscribe( (res :any ) =>{
    })
  }


  update(id : number){
this.router.navigate(['/updateuser',id])
  }

}
