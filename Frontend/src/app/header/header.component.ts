import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router,public _auth:AuthserviceService) { }

  ngOnInit(): void {
  }

  logoutUser(){
    localStorage.removeItem('admintoken');
    this._router.navigate(['']);
  }


}
