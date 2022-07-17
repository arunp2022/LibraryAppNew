import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserauthGuard implements CanActivate {
  
  constructor(private _auth:AuthserviceService, 
    private _router:Router){}
  
  canActivate():boolean{
    if(this._auth.userloggedIn()) 
    {
      console.log("true");
      return true;
    }
    else {
      this._router.navigate(['']);
      return false;
    }
  }
  
}
