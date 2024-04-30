import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MsgsService } from '../services/msgs.service';

@Component({
  selector: 'app-messages',
  imports:[NgFor],
  standalone:true,
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage  {

  msgs:any=[];

  constructor(private htpp:MsgsService) { }

  ngOnInit() {

this.htpp.getmsgs().subscribe( (res :any)=>{
this.msgs=res

})

  }

}
