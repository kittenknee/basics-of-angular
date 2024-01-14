import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from './credentials';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  private url = "http://localhost:3000/credentials";

  constructor(private http: HttpClient) { }

  getCredential(): Observable<Credentials[]>{
    return this.http.get<Credentials[]>(this.url);
  }

  getCredentialbyID(id: number): Observable<Credentials>{
    const apiUrl = `${this.url}/${id}`;
    return this.http.get<Credentials>(apiUrl);
  }

  addCredential(credential: Credentials): Observable<Credentials>{
    return this.http.post<Credentials>(this.url, credential);
  }
}
