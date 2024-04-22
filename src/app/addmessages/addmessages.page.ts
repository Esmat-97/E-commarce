import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addmessages',
  imports:[IonicModule,FormsModule],
  standalone:true,
  templateUrl: './addmessages.page.html',
  styleUrls: ['./addmessages.page.scss'],
})
export class AddmessagesPage {

  constructor(private http:HttpClient) { }

  messagevalue:any={}
  
  submitForm(main:any){
      this.messagevalue  =  main.value
      console.log(this.messagevalue)
      this.http.post('http://localhost:1999/insertmsg',this.messagevalue).subscribe((res)=>{

      })
  }
 

}
