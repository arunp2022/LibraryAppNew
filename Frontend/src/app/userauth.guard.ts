import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable(
  //{
  //providedIn: 'root'
//}
)
export class UserauthGuard{//UserauthGuard implements CanActivate {
  
  constructor(private _auth:AuthserviceService, 
    private _router:Router,
    private _http:HttpClient){}
  
             // canActivate():boolean{
             //   if(this._auth.userloggedIn()) 
              //  {
              //    console.log("true");
             //     return true;
             //   }
              //  else {
                //  this._router.navigate(['']);
                //  return false;
               // }
             // }
             signup(body:any){
              return this._http.post('http://127.0.0.1:3000/users/register',body,{
                observe:'body',
                headers:new HttpHeaders().append('Content-Type','application/json')
              });
            }
          
            login(body:any){
              return this._http.post('http://127.0.0.1:3000/users/login',body,{
                observe:'body',
                withCredentials:true,
                headers:new HttpHeaders().append('Content-Type','application/json')
              });
            }
          
            authservice(){
              return this._http.get('http://127.0.0.1:3000/users/user',{
                observe:'body',
                withCredentials:true,
                headers:new HttpHeaders().append('Content-Type','application/json')
              })
            }
          
            logout(){
              return this._http.get('http://127.0.0.1:3000/users/logout',{
                observe:'body',
                withCredentials:true,
                headers:new HttpHeaders().append('Content-Type','application/json')
              })
            }         
  
}
