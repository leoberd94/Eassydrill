import {
  Component, OnInit, OnDestroy, Inject, PLATFORM_ID, AfterViewInit
} from '@angular/core';
import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CommonModule, NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {

  images = [
    '/img1.webp',
    '/img2.webp',
    '/img3.webp',
    '/img4.webp',
    '/img5.webp',
    '/img6.webp',
  ];

  activeIndex = 0;
  private intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  setImage(i: number) {
    this.activeIndex = i;
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    }, 5000);
  }
}