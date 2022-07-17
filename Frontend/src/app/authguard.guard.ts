import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private _auth:AuthserviceService, 
  private _router:Router){}
  

  canActivate():boolean{
    if(this._auth.adminloggedIn()) 
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
