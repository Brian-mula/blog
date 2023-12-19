import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogItemComponent } from "./blog-item/blog-item.component";
import { NewBlogComponent } from "./new-blog/new-blog.component";
import { PostsService } from './posts.service';


@Component({
    selector: 'app-blogs',
    standalone: true,
    templateUrl: './blogs.component.html',
    styleUrl: './blogs.component.css',
    imports: [BlogItemComponent, CommonModule, NewBlogComponent,FormsModule,]
})
export class BlogsComponent implements OnInit{
    blogs:{title:string,description:string}[] = [];
    isFetching = false;

    constructor(private allBlogs:PostsService,private http:HttpClient) { }

    ngOnInit(): void {
        
        this.isFetching = true;
        this.allBlogs.fetchBlogs().subscribe(blogs => {
            this.isFetching = false;
            this.blogs = blogs;
        });
    }

   

}
