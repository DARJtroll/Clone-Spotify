import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const homeRoutes: Routes = [
  {
    path:"tracks",
    loadChildren: () => import('@modules/tracks/tracks.routes').then(m => m.tracksRoutes)

  },
  {
    path:"favorites",
    loadChildren: () => import('@modules/favorites/favorites.routes').then(m => m.favoriteRoutes)

  },
  {
    path:"history",
    loadChildren: () => import('@modules/history/history.routes').then(m => m.historyRoutes)
  },
  {
    path:"**",
    redirectTo:"/tracks"
  }
];
