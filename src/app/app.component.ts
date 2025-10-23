import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ✅ added router support
import Aos from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet // ✅ added here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentYear = new Date().getFullYear();

  ngOnInit() {
    Aos.init({
      duration: 800, // animation speed in ms
      once: true, // only animate once
      easing: 'ease-in-out'
    });
  }
}
