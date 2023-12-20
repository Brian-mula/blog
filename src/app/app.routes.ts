import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
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
        path:'auth',
        component: AuthComponent
    },
   
    {
        path:'**',
        component: NotFoundComponent
    }
   
];
