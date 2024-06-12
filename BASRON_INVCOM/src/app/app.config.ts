import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {  BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule, NoopAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing/app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [
  provideZoneChangeDetection({ eventCoalescing: true }), 
  provideRouter(routes),
  provideClientHydration(),
  provideHttpClient(),
  MessageService,
  BrowserAnimationsModule,
  ToastModule
  ],
};
