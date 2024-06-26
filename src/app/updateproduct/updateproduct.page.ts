import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateproduct',
  standalone:true,
  imports:[NgFor , FormsModule],
  templateUrl: './updateproduct.page.html',
  styleUrls: ['./updateproduct.page.scss'],
})


export class UpdateproductPage implements OnInit {

  products:any=[];
  iti:any=[];

  constructor(private http:HttpClient , private activaterouter:ActivatedRoute){}

ngOnInit() {
  this.http.get('http://localhost:1999/getproducts').subscribe((response :any)=>{
this.products =response
console.log(this.products);
const id= this.activaterouter.snapshot.params['id']
this.iti=this.products.find((item:any)=> item.product_id ==`${id}`)
  })




}


submitForm(main :any){
console.log(main.value.id);
this.products=main.value
this.http.put(`http://localhost:1999/updateproduct`, this.products).subscribe( (response)=>{
})
}


}
