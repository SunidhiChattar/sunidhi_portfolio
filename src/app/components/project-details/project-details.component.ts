import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  imports: [CommonModule,]
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string | null = null;
  project: any;

  projects = [
    {
      id: 'kotak',
      title: 'Kotak Mahindra Bank',
      description: 'A secure, scalable banking application built with Angular and RxJS...',
      details: `Worked on the frontend architecture and implemented a range of high-impact features to improve performance, maintainability, and data integrity:`,
      l1: 'Developed real-time dashboards for transaction tracking and analytics.',
      l2: 'Implemented HTTP interceptors for secure API communication.',
      l3: 'Built breadcrumb navigation for intuitive user flow.',
      l4: 'Integrated Content Security Policy (CSP) and encryption.',
      tech: ['Angular', 'RxJS', 'HTML', 'SCSS', 'CSP', 'TypeScript']
    },
    {
      id: 'nsdl',
      title: 'NSDL Bank Platform',
      description:
        'Frontend modernization and performance optimization for NSDL Bank’s digital services platform.',
      details:
        'Contributed to UI re-engineering, accessibility, and secure integrations for a scalable banking web platform:',
      l1: 'Redesigned legacy UI components into reusable Angular modules with consistent design patterns.',
      l2: 'Enhanced accessibility compliance (WCAG) across all major interactive modules.',
      l3: 'Optimized rendering performance and API handling for faster data visualization.',
      l4: 'Implemented CSP-compliant SVG handling and improved frontend security posture.',
      tech: ['Angular', 'RxJS', 'REST APIs', 'Accessibility', 'CSP']
    },
    {
      id: 'bob',
      title: 'Bank of Baroda Mobile App',
      description:
        'A cross-platform mobile banking application built with React Native for Bank of Baroda.',
      details:
        'Designed and developed mobile modules ensuring high performance, usability, and secure API communication:',
      l1: 'Integrated RESTful APIs for fetching and rendering real-time financial data and dashboards.',
      l2: 'Built dynamic UI components for account insights, notifications, and transaction history.',
      l3: 'Implemented secure storage and encrypted communication for sensitive banking data.',
      l4: 'Optimized app startup time and state management for better user experience.',
      tech: ['React Native', 'TypeScript', 'APIs', 'Redux', 'Secure Storage']
    },
    {
      id: 'android',
      title: 'FINO Bank Android App',
      description:
        'A modern Android banking application developed with Jetpack Compose and Kotlin for FINO Payments Bank.',
      details:
        'Engineered core Android modules emphasizing biometric authentication, encryption, and clean UI architecture:',
      l1: 'Implemented biometric authentication and secure encryption for AEPS and prepaid services.',
      l2: 'Developed modern, composable UI elements using Jetpack Compose for enhanced maintainability.',
      l3: 'Integrated API layers for seamless data synchronization with banking services.',
      l4: 'Improved performance and app responsiveness through Kotlin Coroutines and Flow.',
      tech: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Encryption', 'Android']
    },
  ];

  constructor(private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.project = this.projects.find(p => p.id === this.projectId);
    
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  goBackToProjects() {
    // If user came from home → go back in history
    if (window.history.length > 1) {
      this.location.back();
    } else {
      // Otherwise, navigate home and scroll to projects section
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      });
    }
  }
}
