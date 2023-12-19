import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean; // optional
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(formData: { email: string; password: string }) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNLdD1eTIAZkWWwIP4e3hec-FYxWREAbk',
        {
          email: formData.email,
          password: formData.password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleErrors)
      );
  }

  login(formData: { email: string; password: string }) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNLdD1eTIAZkWWwIP4e3hec-FYxWREAbk',
        {
          email: formData.email,
          password: formData.password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleErrors));
  }

  private handleErrors(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'USER_DISABLED':
        errorMessage = 'This user has been disabled by an administrator.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already.';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled for this project.';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage =
          'We have blocked all requests from this device due to unusual activity. Try again later.';
        break;
    }
    return throwError(errorMessage);
  }
}
