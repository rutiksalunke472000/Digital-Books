import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Author from './entity/Author';
import Book from './entity/Book';
const API_URL="http://localhost:8082/api"
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public client: HttpClient) { }
  saveBook(book: Book){
    const authorId=101;
    return this.client.post(API_URL+"/savebook", book)
  }

  getBooks(){
    return this.client.get(API_URL+'/books')
  }

  findBooks(category:string, price: number, author:string){
   return this.client.get(API_URL+"/search?category="+category+"&price="+price+"&authorName="+author)
  }
}
