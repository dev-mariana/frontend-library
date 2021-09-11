import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksService } from '../services/books.service';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [BooksComponent],
  exports: [BooksComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  providers: [BooksService],
})
export class BooksModule { }
