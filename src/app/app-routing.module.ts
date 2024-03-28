import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { CreateLessonComponent } from './lessons/create-lesson/create-lesson.component';

export const Approutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: FullComponent,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'lesson-create',
    component: FullComponent,
    loadChildren: () =>
    import('./lessons/create-lesson/create-lesson.module').then((m) => m.CreateLessonModule),
  },
  {
    path: 'lesson-packages/:id',
    component: FullComponent,
    loadChildren: () =>
    import('./lessons/lesson-package/lesson-package.module').then((m) => m.LessonPackageModule),
  },
  {
    path: 'participant-types',
    component: FullComponent,
    loadChildren: () =>
    import('./participant-types/participant-types.module').then((m) => m.ParticipantTypesModule),
  },
  {
    path: 'about',
    component: FullComponent,
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'component',
    loadChildren: () =>
      import('./component/component.module').then((m) => m.ComponentsModule),
  },
  {
    path: '**',
    redirectTo: '/starter',
  },
];
