import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
// import { environment } from 'src/environments/environment';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // public url: string = environment.baseURL;
  public url: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  public getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}`);
  }
}
