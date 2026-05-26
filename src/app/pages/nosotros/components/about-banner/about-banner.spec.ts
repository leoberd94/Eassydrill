import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBanner } from './about-banner';

describe('AboutBanner', () => {
  let component: AboutBanner;
  let fixture: ComponentFixture<AboutBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
