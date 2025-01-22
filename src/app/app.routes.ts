import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/navigation/navigation.module').then(
        (m) => m.NavigationModule
      ),
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./modules/navigation/project/project.module').then(
        (m) => m.ProjectModule
      ),
  },
  {
    path: 'stack',
    loadChildren: () =>
      import('./modules/stack/stack.module').then((m) => m.StackModule),
  },
];
