import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { TopNavComponent } from "../top-nav/top-nav.component";

@Component({
    selector: 'app-app-layout',
    standalone: true,
    templateUrl: './app-layout.component.html',
    styleUrl: './app-layout.component.css',
    imports: [TopNavComponent, SideBarComponent,RouterModule]
})
export class AppLayoutComponent {

}
