import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-messages',
  imports:[NgFor],
  standalone:true,
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage  {

  msgs:any=[];

  constructor(private htpp:HttpClient) { }

  ngOnInit() {

this.htpp.get('http://localhost:1999/getmsgs').subscribe( (res :any)=>{
this.msgs=res

})

  }

}
