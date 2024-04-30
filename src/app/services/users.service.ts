import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HOST_NAME } from './constant';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private htp:HttpClient) { }


  selectusers(email:any , password:any) :Observable<any[]>{
    return this.htp.get<any[]>(`${HOST_NAME}/users/select?email=${email}&password=${password}`)
      }


  getusers() :Observable<any[]>{
return this.htp.get<any[]>(`${HOST_NAME}/users/getusers`)
  }

  insertusers(users:any) :Observable<any>{
    return this.htp.post<any>(`${HOST_NAME}/users/insert`,users)
  }

  delusers(id:any) :Observable<any>{
    return this.htp.delete<any>(`${HOST_NAME}/users/deluser?id=${id}`)
  }
}
