import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { BookModel } from '../books/books.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  bookItem = new BookModel("","","","");

  constructor(public bookService:BookServiceService, public router:Router) { }

  ngOnInit(): void {
  }


  AddBook(){
    this.bookService.newBook(this.bookItem);
    console.log("Called");
    alert("Success");
    this.router.navigate(['books']);
  }


}
