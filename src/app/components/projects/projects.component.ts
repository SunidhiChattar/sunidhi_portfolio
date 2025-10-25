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
      title: 'Kotak CBC Portal',
      description:
        'Developed and maintained Kotak CBC Portal with responsive UI, custom SVGs, breadcrumb navigation, and interactive D3.js data visualizations, ensuring seamless and secure user experiences.',
      tech: ['Angular', 'RxJS', 'REST APIs']
    },
    {
      id: 'nsdl',
      title: 'NSDL CBC Platform',
      description:
        'Built and optimized NSDL CBC Platform’s web interface, enabling seamless multi-level navigation, enhanced user engagement, and secure, high-performance interactions.',
      tech: ['Angular', 'RxJS', 'REST APIs']
    },
    {
      id: 'bob',
      title: 'Bank of Baroda Mobile App',
      description:
        'Developed the Bank of Baroda cross-platform React Native application, replicating the existing Android product with end-to-end API integration, dynamic dashboard rendering, secure data handling, session management, and management of debug and release APK configurations.',
      tech: ['React Native', 'APIs', 'TypeScript']
    },
    {
       id: 'android',
      title: 'FINO Bank Prepaid Card System',
      description:
        'Developed using Kotlin and Jetpack Compose, implementing biometric authentication, encryption, and modular, lifecycle-aware UI components for secure and efficient user experiences.',
      tech: ['Angular', 'RxJS', 'REST APIs']
    },
  ];
  log(id: string) {
  console.log('Navigating to:', id);
}

}
