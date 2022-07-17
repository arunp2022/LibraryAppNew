import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../authors/authors.model';
import { AuthorServiceService } from '../author-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {

  authorItem = new AuthorModel("","","","","");

  constructor(private authorService:AuthorServiceService,private router:Router) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editAuthorId");
    this.authorService.getSingleAuthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
    })
  }

  updateAuthor(){
    this.authorService.editAuthor(this.authorItem);
    alert("Success");
    this.router.navigate(['authors']);
  }

}
