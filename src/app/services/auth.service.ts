import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5041';

  constructor(private httpClient: HttpClient) {}

  login(user: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/auth/login`, {
      user,
      password
    });
  }
}