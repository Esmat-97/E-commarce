import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private htp:HttpClient) { }

getproducts():Observable<any[]>{
return this.htp.get<any[]>('http://localhost:1999/getproducts')
}


insertproducts(product:any):Observable<any>{
  return this.htp.post<any>('http://localhost:1999/insertproduct ',product)
  }


  
delproducts(id:any):Observable<any>{
  return this.htp.delete<any>(`http://localhost:1999/delproduct?id=${id}`)
  }

}
