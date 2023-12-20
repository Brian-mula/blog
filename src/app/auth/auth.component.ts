import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingSpinnerComponent } from "../shared/loading-spinner/loading-spinner.component";
import { AuthResponseData, AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.css',
    imports: [FormsModule, CommonModule, LoadingSpinnerComponent]
})
export class AuthComponent {
  constructor(
     private authService: AuthService,
     private router:Router
  ) {}

  isLoginMode:boolean = true;
  isLoading:boolean = false;
  error:string = null;


  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

 

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (!form.valid) {
      return;
    }
    let authObs:Observable<AuthResponseData>
    this.isLoading = true;
    if(this.isLoginMode){
      authObs= this.authService.login(form.value)
    }else{
      authObs= this.authService.signUp(form.value)
    }
    authObs.subscribe({
      next: responseData => {
        this.isLoading = false;
        this.router.navigate(['/']);
        console.log(responseData);
      },
      error: errorRes => {
        this.isLoading = false;
        this.error = errorRes;
        console.log(errorRes);
      }
    })
    form.reset();
  }

}
