import { Component } from '@angular/core';
import { BlogItemComponent } from "./blog-item/blog-item.component";

@Component({
    selector: 'app-blogs',
    standalone: true,
    templateUrl: './blogs.component.html',
    styleUrl: './blogs.component.css',
    imports: [BlogItemComponent]
})
export class BlogsComponent {

}
