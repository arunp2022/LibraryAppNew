import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  server_address: string = 'api';

  constructor(private http:HttpClient) { }

  loginUser(user:any){
    console.log('entered auth service');
    return this.http.post<any>(`${this.server_address}/login`,{user});
  }
  
  signupUser(user:any){
    console.log(user);
    return this.http.post<any>(`${this.server_address}/signup`,{user});
  }

  userloggedIn(){
    return !!localStorage.getItem('usertoken');
  }

  adminloggedIn(){
      return !!localStorage.getItem('admintoken');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
