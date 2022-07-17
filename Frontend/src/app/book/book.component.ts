import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { BookModel } from '../books/books.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookItem = new BookModel("","","","");

  // bookItem: BookModel[] = [];

  constructor(private bookService:BookServiceService, public router:Router) { }

  ngOnInit(): void {

    let bookId = localStorage.getItem("singleBookId");

    this.bookService.getSingleBook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
    });
  }


}
