import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../author-service.service';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  
  authors=[{
    name:'',
    country:'',
    works:'',
    dob:'',
    image:''}]
  

  constructor(private authorService:AuthorServiceService,public router:Router,public _auth:AuthserviceService) { }

  ngOnInit(): void {
    this.authorService.getauthor().subscribe((data)=>{
      console.log(data);
      this.authors = JSON.parse(JSON.stringify(data));
    });
  }

  singleAuthor(author:any){
    localStorage.setItem("singleAuthorId",author._id.toString());
    console.log(author);
    
    this.router.navigate(['author']);

    let bookId = localStorage.getItem("singleAuthorId");
    console.log(bookId);

    this.authorService.getSingleAuthor(bookId).subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    });
  }

  editAuthor(author:any){
    localStorage.setItem("editAuthorId",author._id.toString());
    this.router.navigate(['updateauthor']);
  }

  // deleteAuthor(author:any){
  //   this.authorService.deleteAuthor(author._id)
  //   .subscribe((data)=>{
  //     this.authors = this.authors.filter(p => p !== author);
  //   })
  // }

  deleteAuthor(author:any)
  {
    var txt;
    var r = confirm("do you want to delete this author ✌😑");
    if (r == true) {
      this.authorService.deleteAuthor(author._id)
      .subscribe(); 
        
      location.reload();
     
    } else {
      this.router.navigate(['authors']);
    }
  }
}
