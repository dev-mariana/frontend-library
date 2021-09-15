import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../interfaces/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {

  public books: Book[];

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    return this.booksService.getBooks().subscribe(res => {
      this.books = res;
      // console.log(this.books);
    }, error => { console.error(error); });
  }

  goBook(id: string) {
    this.router.navigateByUrl(`/books/${id}`);
  }

}
