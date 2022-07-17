import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  server_address: string = 'api';

  constructor(public http:HttpClient) { }

  getauthor(){
    return this.http.get<any>(`${this.server_address}/authors`);
  }

  getSingleAuthor(id:any){
    return this.http.get<any>(`${this.server_address}/authors/`+id);
  }

  newAuthor(item:any){
    return this.http.post<any>(`${this.server_address}/addauthor`,{item})
    .subscribe(data => {console.log(data)});
  }

  editAuthor(author:any){
    return this.http.put<any>(`${this.server_address}/updateauthor`,author)
    .subscribe(data => {
      console.log(data);
    });
  }

  deleteAuthor(id:any){
    return this.http.delete<any>(`${this.server_address}/removeauthor/`+id);
  }
}
