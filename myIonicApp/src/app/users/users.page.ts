import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-users',
  imports:[IonicModule,CommonModule],
  standalone:true,
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})

export class UsersPage  {

  productlist:any=[];

  constructor(private htpp:HttpClient) { }

  ngOnInit() {
    this.htpp.get('http://localhost:1999/getusers').subscribe( (res :any ) =>{
    console.log(res);
    this.productlist=res;
    })
    
  }

  del(id :number){

    console.log(`${id}`)
    this.htpp.delete(`http://localhost:1999/deluser?id=${id}`).subscribe( (res :any ) =>{
    })
  }

}
