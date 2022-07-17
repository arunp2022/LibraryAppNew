import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [{
                          path: '',
                          redirectTo: '/books',
                          pathMatch: 'full',
                        },
                        {path:'books',component:BooksComponent},
                        {path:'signup',component:SignupComponent},
                        {path:'login',component:LoginComponent},
                        {path:'authors',component:AuthorsComponent},
                        
                        {path:'book',component:BookComponent},
                        {path:'author',component:AuthorComponent},
                        {path:'addbook',component:AddbookComponent,canActivate:[AuthguardGuard]},
                        {path:'addauthor',component:AddauthorComponent,canActivate:[AuthguardGuard]},
                        {path:'updatebook',component:UpdatebookComponent,canActivate:[AuthguardGuard]},
                        {path:'updateauthor',component:UpdateauthorComponent,canActivate:[AuthguardGuard]}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
