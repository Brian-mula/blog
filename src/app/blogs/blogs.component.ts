import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AllBlogsService } from '../services/all-blogs.service';
import { BlogItemComponent } from "./blog-item/blog-item.component";
import { NewBlogComponent } from "./new-blog/new-blog.component";


@Component({
    selector: 'app-blogs',
    standalone: true,
    templateUrl: './blogs.component.html',
    styleUrl: './blogs.component.css',
    imports: [BlogItemComponent, CommonModule, NewBlogComponent,FormsModule]
})
export class BlogsComponent implements OnInit{
    blogs:{title:string,description:string}[] = [];

    constructor(private allBlogs:AllBlogsService) { }

    ngOnInit(): void {
        this.blogs = this.allBlogs.blogs;
    }

}
