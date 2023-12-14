import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.css'
})
export class BlogItemComponent {
  @Input('receivedBlog')receivedBlog: { title: string; description: string };

}
