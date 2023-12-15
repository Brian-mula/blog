import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-new-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.css',
})
export class NewBlogComponent {
  @ViewChild('newBlogModal') newModal: ElementRef;
  @ViewChild('blodData') bData: NgForm;

  //newBlog:Blog = {} as Blog;

  constructor(private http: HttpClient) {}

  openModal() {
    this.newModal.nativeElement.showModal();
  }

  closeModal() {
    this.newModal.nativeElement.close();
  }
  onSubmit() {
    const newBlog: Blog = {
      title: this.bData.value.title,
      description: this.bData.value.description,
    };
    this.http
      .post(
        'https://blog-7f459-default-rtdb.firebaseio.com/blogs.json',
        newBlog
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
    console.log(newBlog);
  }
}
