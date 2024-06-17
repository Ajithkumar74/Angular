import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {  provideClientHydration } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
  provideZoneChangeDetection({ eventCoalescing: true }), 
  provideRouter(routes),
 
  provideHttpClient(),
  MessageService,
  provideAnimations(),
  ToastModule, provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(),

  // importProvidersFrom([
  // //   provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  // //   provideAuth(() => getAuth()),
  // //   provideFirestore(() => getFirestore()),
  // //   provideStorage(() => getStorage())
  // // ]),
   ],
  
};
