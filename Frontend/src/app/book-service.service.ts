import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService{

  server_address: string = 'api';

  constructor(private http:HttpClient) { }

  getbook(){
    return this.http.get(`${this.server_address}/books`);
  }

  getSingleBook(id:any){
    return this.http.get<any>(`${this.server_address}/books/`+id);
  }

  newBook(item:any){
    return this.http.post<any>(`${this.server_address}/addbook`,{item})
    .subscribe(data => {console.log(data)});
  }

  
  editBook(book:any){
    return this.http.put<any>(`${this.server_address}/updatebook`,book)
    .subscribe(data => {
      console.log(data);
    });
  }
  
  deleteBook(id:any){
    return this.http.delete<any>(`${this.server_address}/removebook/`+id);
  }
}
