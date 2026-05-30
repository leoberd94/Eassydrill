import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

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

  images = [
    { src: '/imgservicios.webp', title: '', subtitle: '' },
    { src: '/imgservicios2.webp', title: '', subtitle: '' },
    { src: '/imgservicios3.webp', title: '', subtitle: '' },
    { src: '/imgservicios4.webp', title: '', subtitle: '' },
    { src: '/imgservicios5.webp', title: '', subtitle: '' },
    
  ];

  ngOnInit() {
    this.checkScreen();
  }

  ngOnDestroy() {}

  @HostListener('window:resize', [])
  checkScreen() {
    this.isMobile = window.innerWidth <= 768;
    this.thumbsVisible = this.isMobile ? 3 : 3;
  }

  get visibleThumbs() {
    return this.images.slice(
      this.thumbStartIndex,
      this.thumbStartIndex + this.thumbsVisible
    );
  }

  get currentImage() {
    return this.images[this.currentIndex];
  }

  get counter() {
    return `${this.currentIndex + 1} / ${this.images.length}`;
  }

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

  canGoPrev(): boolean {
    return this.thumbStartIndex > 0;
  }

  canGoNext(): boolean {
    return this.thumbStartIndex + this.thumbsVisible < this.images.length;
  }

  isThumbActive(globalIndex: number): boolean {
    return globalIndex === this.currentIndex;
  }

}
