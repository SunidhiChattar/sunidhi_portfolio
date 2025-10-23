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
      title: 'Kotak CBC Web App',
      description:
        'Developed secure and scalable banking modules in Angular for Kotak Mahindra Bank with features like breadcrumb navigation, HTTP interceptors, and D3.js analytics.',
      tech: ['Angular', 'RxJS', 'REST APIs']
    },
    {
      id: 'nsdl',
      title: 'NSDL CBC Platform',
      description:
        'Built responsive UI modules and implemented CSP-compliant SVG rendering for enhanced frontend security and performance.',
      tech: ['Angular', 'RxJS', 'REST APIs']
    },
    {
      id: 'bob',
      title: 'Bank of Baroda Mobile App',
      description:
        'Built a cross-platform React Native application for Bank of Baroda. Implemented API data fetching, rendering dynamic dashboards, and secure data handling for a seamless mobile banking experience.',
      tech: ['React Native', 'APIs', 'TypeScript']
    },
    {
       id: 'android',
      title: 'FINO Bank Android App',
      description:
        'Developed with Jetpack Compose and Kotlin, focusing on biometric authentication, encryption, and modern UI components for AEPS and prepaid modules.',
      tech: ['Angular', 'RxJS', 'REST APIs']
    },
  ];
  log(id: string) {
  console.log('Navigating to:', id);
}

}
