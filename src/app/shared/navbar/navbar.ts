
import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private platformId = inject(PLATFORM_ID);
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}
