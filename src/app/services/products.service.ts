import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HOST_NAME } from './constant';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private htp:HttpClient) { }

getproducts():Observable<any[]>{
return this.htp.get<any[]>(`${HOST_NAME}/products/getproducts`)
}


insertproducts(product:any):Observable<any>{
  return this.htp.post<any>(`${HOST_NAME}/products/insertproduct`,product)
  }


  
delproducts(id:any):Observable<any>{
  return this.htp.delete<any>(`${HOST_NAME}/products/delproduct?id=${id}`)
  }

}
