import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService, AdminResponse, AdminRequest } from '../../core/services/admin.service';

type ModalMode = 'create' | 'edit';

@Component({
  selector: 'app-admin-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-management.html',
  styleUrl: './admin-management.css',
})
export class AdminManagement implements OnInit {
  admins: AdminResponse[] = [];
  loading = true;
  errorMsg = '';
  successMsg = '';

  // Modal
  showModal = false;
  modalMode: ModalMode = 'create';
  selectedAdmin: AdminResponse | null = null;

  formData: AdminRequest = { email: '', password: '' };
  formLoading = false;
  formError = '';

  // Confirm delete
  showDeleteConfirm = false;
  adminToDelete: AdminResponse | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadAdmins();
  }

  loadAdmins() {
    this.loading = true;
    this.errorMsg = '';
    this.adminService.getAll().subscribe({
      next: (data) => {
        this.admins = data;
        this.loading = false;
      },
      error: () => {
        this.errorMsg = 'Error al cargar los administradores.';
        this.loading = false;
      },
    });
  }

  // ---- Open Modal ----
  openCreateModal() {
    this.modalMode = 'create';
    this.selectedAdmin = null;
    this.formData = { email: '', password: '' };
    this.formError = '';
    this.showModal = true;
  }

  openEditModal(admin: AdminResponse) {
    this.modalMode = 'edit';
    this.selectedAdmin = admin;
    this.formData = { email: admin.email, password: '' };
    this.formError = '';
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.formError = '';
  }

  // ---- Submit ----
  submitForm() {
    if (!this.formData.email.trim()) {
      this.formError = 'El email es obligatorio.';
      return;
    }
    if (this.modalMode === 'create' && !this.formData.password.trim()) {
      this.formError = 'La contraseña es obligatoria.';
      return;
    }

    this.formLoading = true;
    this.formError = '';

    if (this.modalMode === 'create') {
      this.adminService.create(this.formData).subscribe({
        next: () => {
          this.formLoading = false;
          this.showModal = false;
          this.showSuccess('Administrador creado correctamente.');
          this.loadAdmins();
        },
        error: (err) => {
          this.formLoading = false;
          this.formError = err?.error?.message || 'Error al crear el administrador.';
        },
      });
    } else {
      this.adminService.update(this.selectedAdmin!.id, this.formData).subscribe({
        next: () => {
          this.formLoading = false;
          this.showModal = false;
          this.showSuccess('Administrador actualizado correctamente.');
          this.loadAdmins();
        },
        error: (err) => {
          this.formLoading = false;
          this.formError = err?.error?.message || 'Error al actualizar el administrador.';
        },
      });
    }
  }

  // ---- Delete ----
  confirmDelete(admin: AdminResponse) {
    this.adminToDelete = admin;
    this.showDeleteConfirm = true;
  }

  cancelDelete() {
    this.adminToDelete = null;
    this.showDeleteConfirm = false;
  }

  executeDelete() {
    if (!this.adminToDelete) return;
    this.adminService.deleteById(this.adminToDelete.id).subscribe({
      next: () => {
        this.showDeleteConfirm = false;
        this.adminToDelete = null;
        this.showSuccess('Administrador eliminado.');
        this.loadAdmins();
      },
      error: () => {
        this.showDeleteConfirm = false;
        this.errorMsg = 'Error al eliminar el administrador.';
      },
    });
  }

  // ---- Helpers ----
  showSuccess(msg: string) {
    this.successMsg = msg;
    setTimeout(() => (this.successMsg = ''), 3500);
  }

  getInitial(email: string): string {
    return email ? email.charAt(0).toUpperCase() : 'A';
  }
}
