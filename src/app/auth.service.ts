import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  logout(): void {
localStorage.removeItem('email');
localStorage.removeItem('role');
localStorage.removeItem('username');
localStorage.removeItem('cart');
  }


  isAuthenticated(): boolean {
return localStorage.getItem('email') ? true : false ;

  }

}
