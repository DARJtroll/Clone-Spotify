
import { Routes } from '@angular/router';
import { sessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

export const appRoutes: Routes = [
  {
    path:'auth', //TODO: http://localhost:4200/home/
    loadChildren:()=>import('./modules/auth/auth.routes').then(m => m.authRoutes)
  },
  {
    path:'',
    component:HomePageComponent, //TODO: http://localhost:4200/home/
    loadChildren:()=>import('./modules/home/home.routes').then(m => m.homeRoutes),
    canActivate:[sessionGuard] 
  }

];