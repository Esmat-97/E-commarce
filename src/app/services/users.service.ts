import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private htp:HttpClient) { }

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
