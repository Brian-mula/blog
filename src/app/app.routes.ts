import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children:[
            {
                path:'',
                component:HomeComponent
            },
            {
                path:'blogs',
                component:BlogsComponent
            },
        ]
    },
   
    {
        path:'**',
        component: NotFoundComponent
    }
];
