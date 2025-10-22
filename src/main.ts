import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(CommonModule, FormsModule, BrowserAnimationsModule)
  ]
}).catch(err => console.error(err));


// 🌗 Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

// Load previously selected theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  if (themeToggle) themeToggle.textContent = '☀️';
}

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update icon + local storage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  }
});