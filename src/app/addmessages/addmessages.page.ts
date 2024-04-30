import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MsgsService } from '../services/msgs.service';

@Component({
  selector: 'app-addmessages',
  imports:[IonicModule,FormsModule],
  standalone:true,
  templateUrl: './addmessages.page.html',
  styleUrls: ['./addmessages.page.scss'],
})
export class AddmessagesPage {

  constructor(private http:MsgsService) { }

  messagevalue:any={}
  
  submitForm(main:any){
      this.messagevalue  =  main.value
      console.log(this.messagevalue)
      this.http.insertmsgs(this.messagevalue).subscribe((res)=>{

      })
  }
 

}
