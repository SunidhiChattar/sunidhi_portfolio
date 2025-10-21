import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  imports: [CommonModule, ]
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string | null = null;
  project: any;

  projects = [
    {
      id: 'kotak',
      title: 'Kotak Mahindra Bank Portal',
      description: 'A secure, scalable banking application built with Angular and RxJS...',
      details: `Developed real-time dashboards for transaction tracking, 
      user authentication, and secure data access through encryption and CSP.`,
      tech: ['Angular', 'RxJS', 'HTML', 'SCSS', 'CSP', 'TypeScript']
    },
    {
      id: 'nsdl',
      title: 'NSDL Bank Platform',
      description: 'Frontend re-engineering for NSDL Bank’s digital platform...',
      details: `Focused on modular UI design, optimized performance, 
      and improved accessibility across devices.`,
      tech: ['Angular', 'RxJS', 'REST APIs', 'Accessibility']
    },
     {
      id: 'bob',
      title: 'Bank of Baroda Mobile App',
      description:
        'Built a cross-platform React Native application for Bank of Baroda. Implemented API data fetching, rendering dynamic dashboards, and secure data handling for a seamless mobile banking experience.',
         details: `Focused on modular UI design, optimized performance, 
      and improved accessibility across devices.`,
      tech: ['React Native', 'APIs', 'TypeScript']
    },
    {
       id: 'android',
      title: 'FINO Bank Android App',
      description:
        'Developed with Jetpack Compose and Kotlin, focusing on biometric authentication, encryption, and modern UI components for AEPS and prepaid modules.', 
        details: `Focused on modular UI design, optimized performance, 
      and improved accessibility across devices.`,
      tech: ['Angular', 'RxJS', 'REST APIs']
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.project = this.projects.find(p => p.id === this.projectId);
  }
}
