import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private apiUrl = 'http://localhost:5200/user/signIn';

  constructor(private http: HttpClient) {}

  validateUser(loginId: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { loginId, password };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
