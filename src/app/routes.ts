import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/dashboard/routes').then((mod) => mod.ROUTES),
  },
];
