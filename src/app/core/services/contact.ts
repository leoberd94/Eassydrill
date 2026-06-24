import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactRequest {
  fullName: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) {}

  sendMessage(data: ContactRequest): Observable<void> {
    return this.http.post<void>(this.apiUrl, data);
  }
}
