import { Routes } from '@angular/router';
import { AboutComponent } from './about';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'about',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
