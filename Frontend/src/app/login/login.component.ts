import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {username:'',
          password:''}

  constructor(private _auth:AuthserviceService,private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    alert('logged In');
    this._auth.loginUser(this.user)
    .subscribe((res)=>{
      if(res.role == "admin"){
        localStorage.setItem('admintoken', res.token);
        alert("success");
        this._router.navigate(['books']);
        console.log("success");
      }
      else{
        localStorage.setItem('usertoken', res.token);
        alert("success");
        this._router.navigate(['authors']);
        console.log("success");
      }
    });
  }
  

}
