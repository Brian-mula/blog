import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AllBlogsService } from '../services/all-blogs.service';
import { BlogItemComponent } from "./blog-item/blog-item.component";
import { Blog } from './blog.model';
import { NewBlogComponent } from "./new-blog/new-blog.component";


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

    constructor(private allBlogs:AllBlogsService,private http:HttpClient) { }

    ngOnInit(): void {
        
        this.fetchBlogs();
    }

    private fetchBlogs(){
        this.isFetching = true;
        this.http.get('https://blog-7f459-default-rtdb.firebaseio.com/blogs.json').pipe(map((responseData:{[key:string]:Blog}) =>{
            const blogsArray:Blog[] = [] as Blog[];
            for(const key in responseData){
                if(responseData.hasOwnProperty(key)){
                    blogsArray.push({...responseData[key] as Blog,id:key});
                }
            }
            return blogsArray;
        }))
        .subscribe((responseData) => {
           // console.log(responseData);
              this.isFetching = false;
              this.blogs = responseData;
        });
    }

}
