import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(
     private authService: AuthService
  ) {}

  isLoginMode:boolean = true;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

 

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (!form.valid) {
      return;
    }
    if(this.isLoginMode){
  
    }else{
      this.authService.signUp(form.value).subscribe({
        next: responseData => {
          console.log(responseData);
        },
        error: error => {
          console.log(error);
        }
      })
    }
    
    form.reset();
  }

}
