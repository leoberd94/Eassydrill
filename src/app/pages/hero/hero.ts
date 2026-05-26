import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  videos = [
    '/desktopVid_Hero1_optimizado1.mp4',
    '/Vid_Hero2_opt.mp4' // Reemplazar con el nombre exacto de tu segundo video
  ];
  activeIndex = 0;
  private intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.videos.length;
      }, 7000); // Cambia de video cada 7 segundos
    }
  }

  setVideo(index: number) {
    this.activeIndex = index;
    // Resetear el intervalo si el usuario hace clic manualmente
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
         this.activeIndex = (this.activeIndex + 1) % this.videos.length;
      }, 7000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
