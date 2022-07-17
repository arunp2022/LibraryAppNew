import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../author-service.service';
import { AuthorModel } from '../authors/authors.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authorItem = new AuthorModel("","","","","");

  constructor(public authorService:AuthorServiceService,public router:Router) { }

  ngOnInit(): void {

    let authorId = localStorage.getItem("singleAuthorId");

    this.authorService.getSingleAuthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
    });

  }

}
