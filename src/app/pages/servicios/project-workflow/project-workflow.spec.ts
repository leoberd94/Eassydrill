import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWorkflow } from './project-workflow';

describe('ProjectWorkflow', () => {
  let component: ProjectWorkflow;
  let fixture: ComponentFixture<ProjectWorkflow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectWorkflow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectWorkflow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
