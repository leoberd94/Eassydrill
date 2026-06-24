import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'etiquetas',
    loadComponent: () =>
      import('./pages/etiquetas/etiquetas').then(m => m.Etiquetas)
  },
  {
    path: 'cleanup',
    loadComponent: () =>
      import('./pages/cleanup/cleanup').then(m => m.Cleanup)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About)
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./pages/servicios/servicios').then(m => m.Servicios)
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/nosotros/nosotros').then(m => m.Nosotros)
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto').then(m => m.Contacto)
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./pages/gallery/gallery').then(m => m.Gallery)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login').then(m => m.Login)
  },

  // 👇 Agrega esto
  {
    path: 'admin/dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];