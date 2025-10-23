import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  // { path: '', component: ProjectsComponent },  // Default route
  // { path: 'about', component: AboutComponent },
  // { path: 'skills', component: SkillsComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'project/:id', component: ProjectDetailsComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },               // Home shows all sections
  { path: 'project/:id', component: ProjectDetailsComponent }, // detail page
  { path: '**', redirectTo: '' }
];
