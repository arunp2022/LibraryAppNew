import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';
import { BookModel } from '../books/books.model';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  bookItem = new BookModel("","","","");

  constructor(private bookService:BookServiceService,private router:Router) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.bookService.getSingleBook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
    })
  }

  updateBook(){
    this.bookService.editBook(this.bookItem);
    alert("Success");
    this.router.navigate(['books']);
  }

}
