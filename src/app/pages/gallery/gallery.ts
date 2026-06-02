import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements OnInit, OnDestroy {

  currentIndex = 0;
  thumbStartIndex = 0;
  thumbsVisible = 3;
  isMobile = false;
  lightboxOpen = false;

  images = [
    { src: '/imgservicios.webp',  title: '', subtitle: '' },
    { src: '/imgservicios2.webp', title: '', subtitle: '' },
    { src: '/imgservicios3.webp', title: '', subtitle: '' },
    { src: '/imgservicios4.webp', title: '', subtitle: '' },
    { src: '/imgservicios5.webp', title: '', subtitle: '' },
  ];

  ngOnInit() { this.checkScreen(); }
  ngOnDestroy() { document.body.style.overflow = ''; }

  @HostListener('window:resize', [])
  checkScreen() {
    this.isMobile = window.innerWidth <= 768;
    this.thumbsVisible = 3;
  }

  // ─── Teclado ──────────────────────────────────────────────────────────────
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (!this.lightboxOpen) return;
    if (event.key === 'Escape')      this.closeLightbox();
    if (event.key === 'ArrowLeft')   this.prevLightbox(event as any);
    if (event.key === 'ArrowRight')  this.nextLightbox(event as any);
  }

  // ─── Galería ──────────────────────────────────────────────────────────────
  get visibleThumbs() {
    return this.images.slice(this.thumbStartIndex, this.thumbStartIndex + this.thumbsVisible);
  }

  get currentImage() { return this.images[this.currentIndex]; }
  get counter() { return `${this.currentIndex + 1} / ${this.images.length}`; }

  selectImage(index: number) {
    this.currentIndex = index;
    this.adjustThumbWindow();
  }

  prev() {
    if (this.thumbStartIndex > 0) {
      this.thumbStartIndex--;
      this.currentIndex = this.thumbStartIndex;
    }
  }

  next() {
    if (this.thumbStartIndex + this.thumbsVisible < this.images.length) {
      this.thumbStartIndex++;
      this.currentIndex = this.thumbStartIndex + this.thumbsVisible - 1;
    }
  }

  adjustThumbWindow() {
    if (this.currentIndex < this.thumbStartIndex) {
      this.thumbStartIndex = this.currentIndex;
    } else if (this.currentIndex >= this.thumbStartIndex + this.thumbsVisible) {
      this.thumbStartIndex = this.currentIndex - this.thumbsVisible + 1;
    }
  }

  canGoPrev(): boolean { return this.thumbStartIndex > 0; }
  canGoNext(): boolean { return this.thumbStartIndex + this.thumbsVisible < this.images.length; }
  isThumbActive(i: number): boolean { return i === this.currentIndex; }

  // ─── Lightbox ─────────────────────────────────────────────────────────────
  openLightbox() {
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  prevLightbox(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.adjustThumbWindow();
  }

  nextLightbox(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.adjustThumbWindow();
  }
}