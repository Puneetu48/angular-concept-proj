import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      //to enable signals binding
      withComponentInputBinding(),
      //this is for having parents params in child
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),
  ],
};
