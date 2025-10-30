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
      description: 'A secure, scalable banking application built with Angular and RxJS, delivering high-performance, responsive, and secure user experiences.',
      details: `Contributed to the frontend architecture and implemented a range of high-impact features to enhance usability, maintainability, and data security:`,
      l1: 'Developed interactive, real-time dashboards using D3.js for transaction tracking, analytics, and insights.',
      l2: 'Implemented HTTP interceptors and encryption mechanisms for secure API communication and data integrity.',
      l3: 'Built breadcrumb navigation and responsive UI components to improve user flow and accessibility.',
      l4: 'Integrated Content Security Policy (CSP) and other security best practices to ensure a secure and compliant application.',
      tech: ['Angular', 'RxJS', 'TypeScript', 'HTML', 'SCSS', 'D3.js', 'CSP'],
      demoVideoUrl1: 'assets/videos/demo.mp4',

    },
    {
      id: 'nsdl',
      title: 'NSDL Bank Platform',
      description: 'Modernized and optimized the NSDL CBC Platform’s frontend to deliver a secure, high-performance, and accessible web experience.',
      details: 'Contributed to UI re-engineering, accessibility improvements, and secure integrations for a scalable and user-friendly banking web platform:',
      l1: 'Redesigned legacy UI components into reusable Angular modules, enforcing consistent design patterns and maintainability.',
      l2: 'Enhanced accessibility compliance (WCAG) across all major interactive modules to ensure an inclusive user experience.',
      l3: 'Optimized rendering performance and API interactions, enabling faster data visualization and real-time insights.',
      l4: 'Implemented CSP-compliant SVG handling and strengthened frontend security measures to safeguard sensitive banking data.',
      tech: ['Angular', 'RxJS', 'REST APIs', 'Accessibility', 'CSP', 'TypeScript', 'HTML', 'SCSS'],
      demoVideoUrl1: 'assets/videos/demo.mp4',

    },
    {
      id: 'bob',
      title: 'Bank of Baroda Mobile App',
      description: 'A cross-platform React Native mobile banking application delivering secure, high-performance, and feature-rich user experiences.',
      details: 'Designed and developed mobile modules with a focus on performance, usability, and secure API integration:',
      l1: 'Integrated RESTful APIs for real-time financial data, transaction history, and dynamic dashboard rendering.',
      l2: 'Built reusable and dynamic UI components for account insights, notifications, and user interactions.',
      l3: 'Implemented secure storage, encrypted communication, and session management to protect sensitive banking data.',
      l4: 'Optimized app startup time, state management, and handled debug/release APK configurations for a seamless deployment process.',
      tech: ['React Native', 'TypeScript', 'Redux', 'REST APIs', 'Secure Storage', 'APIs', 'Mobile Performance'],
      demoVideoUrl1: 'assets/videos/bankOfBaroda.mp4',

    },
    {
      id: 'android',
      title: 'FINO Bank Android App',
      description: 'A modern Android banking application built with Kotlin and Jetpack Compose, delivering secure, efficient, and modular user experiences.',
      details: 'Engineered core Android modules focusing on biometric authentication, encryption, and maintainable UI architecture:',
      l1: 'Implemented biometric authentication and secure encryption for AEPS and prepaid banking services.',
      l2: 'Developed modular, composable UI components using Jetpack Compose for improved maintainability and lifecycle awareness.',
      l3: 'Integrated robust API layers for seamless synchronization with backend banking services.',
      l4: 'Enhanced app performance and responsiveness through Kotlin Coroutines and Flow for asynchronous operations.',
      tech: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Encryption', 'Android', 'AEPS', 'Mobile Security'],
      demoVideoUrl1: 'assets/videos/prepaidCardSystemBlueTheme.mp4',
      demoVideoUrl2: 'assets/videos/prepaidCardSystemGreenTheme.mp4',

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
