import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Blog } from './blog.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}
  createAndStorePost(newBlog: Blog) {
    this.http
      .post(
        'https://blog-7f459-default-rtdb.firebaseio.com/blogs.json',
        newBlog
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchBlogs() {
    return this.http
      .get('https://blog-7f459-default-rtdb.firebaseio.com/blogs.json')
      .pipe(
        map((responseData: { [key: string]: Blog }) => {
          const blogsArray: Blog[] = [] as Blog[];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              blogsArray.push({ ...(responseData[key] as Blog), id: key });
            }
          }
          return blogsArray;
        })
      );
  }
}
