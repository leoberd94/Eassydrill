import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cleanup } from './cleanup';

describe('Cleanup', () => {
  let component: Cleanup;
  let fixture: ComponentFixture<Cleanup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cleanup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cleanup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
