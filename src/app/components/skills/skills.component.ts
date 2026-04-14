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
    languages: ['TypeScript', 'Kotlin', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
    frameworks: ['Angular', 'RxJS', 'D3.js', 'Jetpack Compose', 'Navigation Component'],
    architecture: ['MVVM', 'Feature Modularisation', 'White-label Builds', 'Reusable Module Design', 'CoroutineScope'],
    security: ['AES-CBC / RSA Encryption', 'CSP Compliance', 'Biometric Auth', 'ProGuard'],
    tools: ['Git', 'JIRA', 'Android Studio', 'VS Code', 'Profiler', 'Logcat']
  };
}
