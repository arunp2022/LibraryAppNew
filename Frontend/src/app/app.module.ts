import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { BookServiceService } from './book-service.service';
import { AuthorServiceService } from './author-service.service';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { AuthserviceService } from './authservice.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthguardGuard } from './authguard.guard';
import { UserauthGuard } from './userauth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    BooksComponent,
    AuthorsComponent,
    BookComponent,
    AuthorComponent,
    AddbookComponent,
    AddauthorComponent,
    SignupComponent,
    LoginComponent,
    UpdatebookComponent,
    UpdateauthorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BookServiceService,AuthorServiceService,UserauthGuard,AuthserviceService,AuthguardGuard,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: TokenInterceptorService,
                multi: true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
