import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';


import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { handleErrorInterceptor } from './core/interceptors/handle-error-interceptor.interceptor';
import { apiGamesHeadersInterceptor } from './core/interceptors/api-games-headers.interceptor';
import { provideToastr, ToastrService } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding()
    ),
    {provide: HTTP_INTERCEPTORS, useClass: handleErrorInterceptor, multi: true},
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    // { provide: ToastrService, useValue: ToastrService },

    // {provide: HttpInterceptorFn, useClass: apiGamesHeadersInterceptor, multi: true},
    provideHttpClient(withInterceptors([apiGamesHeadersInterceptor]))
    // importProvidersFrom(HttpClientModule)
  ]
};
