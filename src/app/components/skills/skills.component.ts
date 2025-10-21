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
    languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Kotlin'],
    frameworks: ['Angular', 'D3.js', 'Jetpack Compose', 'React Native'],
    tools: [
      'AES/RSA Encryption',
      'CSP Policy Implementation',
      'Git',
      'JIRA',
      'Android Studio',
      'VS Code'
    ]
  };
}
