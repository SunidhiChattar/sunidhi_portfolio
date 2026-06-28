import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = {
    languages: ['TypeScript', 'Kotlin', 'JavaScript (ES6+)', 'HTML5', 'CSS3/SCSS'],
    frameworks: ['Angular (v14-v19)', 'RxJS Operators', 'NgRx State Store', 'D3.js', 'Jetpack Compose'],
    architecture: ['Angular Signals', 'Change Detection Optimization', 'MVVM', 'Feature Modularisation'],
    security: ['Content Security Policy (CSP)', 'AES-CBC / RSA Encryption', 'Biometric Auth', 'ProGuard'],
    tools: ['Git', 'Angular DevTools', 'Android Studio', 'VS Code', 'JIRA']
  };
}
