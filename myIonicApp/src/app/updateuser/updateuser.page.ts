import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
  import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateuser',
 imports:[FormsModule , CommonModule],
 standalone:true,
  templateUrl: './updateuser.page.html',
  styleUrls: ['./updateuser.page.scss'],
})
export class UpdateuserPage implements OnInit {

users:any=[];
iti:any=[];

  constructor(private htp:HttpClient ,private activaterouter:ActivatedRoute) { }

  ngOnInit() {
this.htp.get(' http://localhost:1999/getusers').subscribe( (res : any)=>{
this.users=res
const id= this.activaterouter.snapshot.params['id']
this.iti=this.users.find( (item:any)=> item.user_id == `${id}` )
})

  }


  updateform(main :any){

console.log(main.value);
this.htp.put('http://localhost:1999/updateuser',main.value).subscribe(  (res:any)=>{

})
  }

}
