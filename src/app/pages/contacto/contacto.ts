import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto implements OnInit {
  @Input() showHeader = true;

  email = 'Admin@easydrillsolutions.com';
  phone = '+1 (239) 383-0394';
 

  services = [
    'Directional Boring',
    'Fiber Optic Cable Pulling',
    //'Underground Utility Installation',
    //'Project Support & Coordination',
    'Other'
  ];

  form!: FormGroup;
  submitStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email:    ['', [Validators.required, Validators.email]],
      phone:    ['', [Validators.required]],
      service:  ['', [Validators.required]],
      message:  ['']
    });
  }

  get f() { return this.form.controls; }

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitStatus = 'loading';

    this.contactService.sendMessage(this.form.value).subscribe({
      next: () => {
        this.submitStatus = 'success';
        this.form.reset();
      },
      error: () => {
        this.submitStatus = 'error';
      }
    });
  }
}
