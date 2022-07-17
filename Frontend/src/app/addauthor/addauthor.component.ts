import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../author-service.service';
import { AuthorModel } from '../authors/authors.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  authorItem = new AuthorModel("","","","","");

  constructor(public authorService:AuthorServiceService,public router:Router) { }

  ngOnInit(): void {
  }

  AddAuthor(){
    this.authorService.newAuthor(this.authorItem);
    console.log("Called");
    alert("Success");
    this.router.navigate(['authors']);
  }

}
