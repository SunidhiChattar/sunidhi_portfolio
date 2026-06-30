import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [

    {
      id: 'kotak',
      title: 'Portal 1',
      description:
        'Developed and maintained Portal 1 with responsive UI, custom SVGs, breadcrumb navigation, and interactive D3.js data visualizations, ensuring seamless and secure user experiences.',
      tech: ['Angular', 'RxJS', 'REST APIs']
    },
    {
      id: 'nsdl',
      title: 'Portal 2',
      description:
        'Built and optimized Portal 2’s web interface, enabling seamless multi-level navigation, enhanced user engagement, and secure, high-performance interactions.',
      tech: ['Angular', 'RxJS', 'REST APIs']
    },
    {
      id: 'aeroledger',
      title: 'AeroLedger.io',
      description: 'Designed and engineered a high-throughput, micro-investment application enabling fractional asset trading with multi-currency support, utilizing an Angular 18 frontend and NestJS backend microservices.',
      tech: ['Angular', 'Nest.js', 'PostgreSQL']
    },
    {
      id: 'bob',
      title: 'React Native Mobile App',
      description:
        'Developed a cross-platform React Native application with end-to-end API integration, dynamic dashboard rendering, secure data handling, session management, and management of debug and release APK configurations.',
      tech: ['React Native', 'APIs', 'TypeScript']
    },
    {
      id: 'android',
      title: 'Android App',
      description:
        'Developed using Kotlin and Jetpack Compose, implementing biometric authentication, encryption, and modular, lifecycle-aware UI components for secure and efficient user experiences.',
      tech: ['Angular', 'RxJS', 'REST APIs']
    },
  ];
  log(id: string) {
    console.log('Navigating to:', id);
  }

}
