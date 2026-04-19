import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'ask', pathMatch: 'full' },
  { path: 'ask', loadComponent: () => import('./pages/ask/ask').then(m => m.Ask) },
  { path: 'please', loadComponent: () => import('./pages/please/please').then(m => m.Please) },
  { path: 'celebrate', loadComponent: () => import('./pages/celebrate/celebrate').then(m => m.Celebrate) },
];
