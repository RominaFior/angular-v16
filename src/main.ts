import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from "@angular/router";
import { AppComponent } from './app/app.component';
import { ROUTES } from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule), provideRouter(ROUTES) ],
}).catch((err) => console.error(err));
