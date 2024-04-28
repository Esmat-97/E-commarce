import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private htp:HttpClient) { }


  selectusers(email:any , password:any) :Observable<any[]>{
    console.log(email)
    console.log(password)
    return this.htp.get<any[]>(`http://localhost:1999/select?email=${email}&password=${password}`)
      }


  getusers() :Observable<any[]>{
return this.htp.get<any[]>('http://localhost:1999/getusers')
  }

  insertusers(users:any) :Observable<any>{
    return this.htp.post<any>('http://localhost:1999/api',users)
  }

  delusers(id:any) :Observable<any>{
    return this.htp.delete<any>(`http://localhost:1999/deluser?id=${id}`)
  }
}
