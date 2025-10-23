import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, HeaderComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
