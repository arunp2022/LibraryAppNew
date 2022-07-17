import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupModel } from './signup.model';
import { AuthserviceService } from '../authservice.service';
import { UntypedFormBuilder,Validators,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: UntypedFormBuilder,public _router:Router,private _auth:AuthserviceService) { }
  
  user = new SignupModel("","","",0);
  
  ngOnInit(): void {
    
  }

  signUp(){
    this._auth.signupUser(this.user)
    .subscribe(res=>{
      localStorage.setItem('signuptoken',res.token);
      this._router.navigate(['/login']);
    });
  }
  
  }


