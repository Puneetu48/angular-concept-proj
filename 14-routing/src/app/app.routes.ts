import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes as userRoutes } from './users/user.routes';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segment) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess > 0) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
    // redirectTo: '/users/u1',
    // pathMatch: 'full'
    title: 'No task selected',
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    canMatch: [dummyCanMatch],
    data: {
      message: 'Hello!',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  { path: '**', component: NotFoundComponent },
];
