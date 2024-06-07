import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { EmployeesReducer } from './state/Employee.reducers';
import { EmployeeEffects } from './state/Employee.effects';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
              provideHttpClient(),
               provideStore({
                empoyees:EmployeesReducer
               }),
              provideEffects([
              EmployeeEffects
              ])
            ]
};
