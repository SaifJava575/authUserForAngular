import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5200';

  constructor(private http: HttpClient, private router: Router) { }

  signUp(loginId: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/signIn`, { loginId, password });
  }

  signIn(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, { email, password }).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
      })
    );
  }


  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

}
