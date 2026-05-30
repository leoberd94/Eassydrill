import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-workflow',
  imports: [CommonModule, RouterLink],
  templateUrl: './project-workflow.html',
  styleUrl: './project-workflow.css',
})
export class ProjectWorkflow {
  steps = [
    {
      number: '01',
      icon: 'ti-file-description',
      title: 'Project Received',
      description: 'We receive the project scope, review client requirements, drawings, timelines, and project specifications.'
    },
    {
      number: '02',
      icon: 'ti-clipboard-list',
      title: 'Project Planning & Execution Strategy',
      description: 'We plan the execution including scheduling, crew coordination, equipment allocation, safety procedures, and production strategy.'
    },
    {
      number: '03',
      icon: 'ti-map-pin',
      title: 'Utility Locate Coordination',
      description: 'We request utility locates and tickets to identify existing underground utilities before construction begins, ensuring a safe work environment.'
    },
    {
      number: '04',
      icon: 'ti-shovel',
      title: 'Drilling & Construction Operations',
      description: 'We begin drilling and construction activities following all required safety standards, engineering plans, and project specifications.'
    },
    {
      number: '05',
      icon: 'ti-chart-bar',
      title: 'Daily Production Reporting',
      description: 'We generate daily production reports to track progress, completed footage, crew activities, materials used, and field conditions.'
    },
    {
      number: '06',
      icon: 'ti-file-check',
      title: 'As-Built Documentation & Billing',
      description: 'We prepare as-built drawings, bore logs, final documentation, and project billing for client submission and project closeout.'
    }
  ];

}
