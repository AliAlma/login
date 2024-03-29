import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map(response => {
        console.log(response.json())
        let result = response.json();
        if (result && result.token) {
          // console.log('token', result.token);
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      });
  }

  logout() { 
  }

  isLoggedIn() { 
    return false;
  }
}

