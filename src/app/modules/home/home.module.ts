import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
    imports: [
    CommonModule,
    HomeRoutingModule,
    HomePageComponent
],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ]
})
export class HomeModule { }
