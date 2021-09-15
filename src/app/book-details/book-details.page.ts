import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {

  public book: Book;

  constructor(private activatedRoute: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit() {
    this.getBookById();
  }

  getBookById() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    return this.booksService.getBookById(id).subscribe(book_id => {
      this.book = book_id;
      console.log(this.book);
    });
  }

}
