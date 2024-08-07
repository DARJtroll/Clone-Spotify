import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { InjectTokenInterceptor } from '@core/interceptors/inject-token.interceptor';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(//TODO: Solo se importan otros modulos
        BrowserModule, AppRoutingModule, FormsModule),
        CookieService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InjectTokenInterceptor,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
