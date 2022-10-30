import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersInterface } from '../interface/users-interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = 'https://api.github.com';
  apiUrl2: string = 'https://api.github.com/users';
  constructor(private http: HttpClient) {}

  // Get all users from search results
  searchResults(username: string): Observable<UsersInterface> {
    return this.http
      .get<UsersInterface>(`${this.apiUrl}/search/users?q=${username}`)
      .pipe(map((response: any) => response.items));
  }

  // Get user details
  userDetails(username: string): Observable<UsersInterface> {
    return this.http.get<UsersInterface>(`${this.apiUrl2}/${username}`);
  }

  // Get single user
  userDetail(username: string): Observable<UsersInterface> {
    return this.http.get<UsersInterface>(`${this.apiUrl2}/${username}`);
  }
}
