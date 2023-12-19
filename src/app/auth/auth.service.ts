import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(formData: { email: string; password: string }) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNLdD1eTIAZkWWwIP4e3hec-FYxWREAbk',
      {
        email: formData.email,
        password: formData.password,
        returnSecureToken: true,
      }
    );
  }
}
