import { Injectable } from '@angular/core';
import { HOST_NAME } from './constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgsService {

  constructor(private htp:HttpClient) { }

  getmsgs() :Observable<any[]>{
    return this.htp.get<any[]>(`${HOST_NAME}/msgs/getmsgs`)
      }
    
      insertmsgs(message:any) :Observable<any>{
        return this.htp.post<any>(`${HOST_NAME}/msgs/insertmsg`, message)
      }
    

}
