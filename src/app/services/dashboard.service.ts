import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private htp:HttpClient) { }

  totalusers () :Observable<any[]>{
    return this.htp.get<any[]>('http://localhost:1999/totalusers')
      }
    
      totalproducts () :Observable<any[]>{
        return this.htp.get<any[]>('http://localhost:1999/totalproducts')
          }


          admins () :Observable<any[]>{
            return this.htp.get<any[]>('http://localhost:1999/admins')
              }

              

              customers () :Observable<any[]>{
                return this.htp.get<any[]>('http://localhost:1999/customers')
                  }



                  currentproducts () :Observable<any[]>{
                    return this.htp.get<any[]>('http://localhost:1999/currentproducts')
                      }
}
