import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes.module';
import { appConfig } from './app/app.config';

// Merge appConfig with the router provider
const config = {
  ...appConfig,
  providers: [provideRouter(routes)],
};

bootstrapApplication(AppComponent, config)
  .catch((err) => console.error(err));