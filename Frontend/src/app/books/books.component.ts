import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books=[{
    title:'',
    author:'',
    genre:'',
    image:''}];
  
  constructor(public bookService:BookServiceService, private router:Router,public _auth:AuthserviceService) { }

  ngOnInit(): void {
      this.bookService.getbook().subscribe((data)=>{
      console.log(data);
      this.books = JSON.parse(JSON.stringify(data));
      });
  }

  singleBook(book:any){
    localStorage.setItem("singleBookId",book._id.toString());

    console.log(book);
    this.router.navigate(['books']);
    let bookId = localStorage.getItem("singleBookId");
    console.log(bookId);

    this.bookService.getSingleBook(bookId).subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    });
  }

  editBook(book:any){
    localStorage.setItem("editBookId",book._id.toString());
    this.router.navigate(['updatebook']);
  }

  // deleteBook(book:any){
  //   this.bookService.deleteBook(book._id);
  // }

  deleteBook(book:any)
  {
    var txt;
    var r = confirm("do you want to delete this book ✌😑");
    if (r == true) {
      this.bookService.deleteBook(book._id)
      .subscribe(); 
        
        location.reload();
     
    } else {
      this.router.navigate(['books']);
    }
  }
}
