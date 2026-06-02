import {
  Component, OnInit, OnDestroy, Inject, PLATFORM_ID,
  ViewChildren, QueryList, ElementRef, AfterViewInit
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, AfterViewInit, OnDestroy {

  videos = [
    '/Video_hero2.mp4',
    // '/VideoHero2.mp4',
  ];

  activeIndex = 0;
  private intervalId: any;

  @ViewChildren('videoRef') videoRefs!: QueryList<ElementRef<HTMLVideoElement>>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.videos.length > 1) {
      this.intervalId = setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.videos.length;
        this.playActive();
      }, 7000);
    }
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    setTimeout(() => this.playActive(), 300);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  setVideo(i: number) {
    this.activeIndex = i;
    clearInterval(this.intervalId);
    this.playActive();
  }

  private playActive() {
    this.videoRefs?.forEach((ref, i) => {
      const v = ref.nativeElement;
      if (i === this.activeIndex) {
        v.muted = true; // obligatorio para autoplay
        v.play().catch(e => console.warn('No autoplay:', e));
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }
}