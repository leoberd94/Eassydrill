import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface AdminResponse {
  id: number;
  email: string;
  role: string;
}

export interface AdminRequest {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AdminService {
  private apiUrl = `${environment.apiUrl}/admins`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<AdminResponse[]> {
    return this.http.get<AdminResponse[]>(this.apiUrl);
  }

  getById(id: number): Observable<AdminResponse> {
    return this.http.get<AdminResponse>(`${this.apiUrl}/${id}`);
  }

  create(request: AdminRequest): Observable<AdminResponse> {
    return this.http.post<AdminResponse>(this.apiUrl, request);
  }

  update(id: number, request: AdminRequest): Observable<AdminResponse> {
    return this.http.put<AdminResponse>(`${this.apiUrl}/${id}`, request);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
