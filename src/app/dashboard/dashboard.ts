import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.services';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { AdminManagement } from './admin-management/admin-management';


export interface ContactMessage{
  id: number;
  fullName: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  status: string;
  createdAt:string

  
}

type DashTab = 'messages' | 'admins';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, AdminManagement],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{

  messages: ContactMessage[] = [];
  loading = true;
  adminEmail = '';
  activeTab: DashTab = 'messages';

  private apiUrl = `${environment.apiUrl}/admin`;
  
  constructor(
    private http:HttpClient,
    private authService: AuthService,
    private router:Router
  ){}
  ngOnInit() {
    this.adminEmail = this.authService.getEmail() || '';
    this.loadMessages();
    console.log(this.adminEmail);

  }

  loadMessages(){
    this.loading = true;
    this.http.get<ContactMessage[]>(`${this.apiUrl}/messages`).subscribe({
      next:(data)=>{
        this.messages = data;
        this.loading =false
        
      },
      error:()=>{
        this.loading =false;
        
      }
      
    });
    
  }
  updateStatus(id:number, status:string){
     this.http.patch(`${this.apiUrl}/messages/${id}/status?status=${status}`, {}).subscribe({
      next:()=>{
        this.loadMessages();
      },
      error:(err)=>{
        console.error('Error al actualizar el estado', err);
        
      }
     })
  }
 deleteMessage(id: number) {
  if (confirm('Are you sure you want to delete this message?')) {
    this.http.delete(`${this.apiUrl}/messages/${id}`).subscribe({
      next: () => this.loadMessages(),
      error: () => console.error('Error deleting message')
    });
  }
}
  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getStatusClass(status:string):string{
    switch (status) {
      case 'PENDING':
        return 'status-pending';
      case 'READ':
        return 'status-read';
      case 'CLOSED':
        return 'status-closed';
      default:
        return 'status-pending';
    }
  }

get pendingCount() {
  return this.messages.filter(m => m.status === 'PENDING').length; // ← faltaba .length
}

get readCount() {
  return this.messages.filter(m => m.status === 'READ').length;
}

get repliedCount() {  // ← cambia closedCount por repliedCount
  return this.messages.filter(m => m.status === 'REPLIED').length;
}

}
