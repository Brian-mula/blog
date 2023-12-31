import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { BlogsComponent } from './blogs/blogs.component';
import { AllBlogsService } from './services/all-blogs.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    BlogsComponent,
    SideBarComponent,
    TopNavComponent,
    MatIconModule,
    
  ],
  providers: [AllBlogsService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}],
})
export class AppComponent {
  constructor(private allblogsService: AllBlogsService) {}
  title = 'blog';
}
