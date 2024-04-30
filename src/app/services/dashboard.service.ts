import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOST_NAME } from './constant';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private htp:HttpClient) { }

  totalusers () :Observable<any[]>{
    return this.htp.get<any[]>(`${HOST_NAME}/dashboard/totalusers`)
      }
    
      totalproducts () :Observable<any[]>{
        return this.htp.get<any[]>(`${HOST_NAME}/dashboard/totalproducts`)
          }


          admins () :Observable<any[]>{
            return this.htp.get<any[]>(`${HOST_NAME}/dashboard/admins`)
              }

              

              customers () :Observable<any[]>{
                return this.htp.get<any[]>(`${HOST_NAME}/dashboard/customers`)
                  }



                  currentproducts () :Observable<any[]>{
                    return this.htp.get<any[]>(`${HOST_NAME}/dashboard/currentproducts`)
                      }
}
