import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { SearchComponent } from './components/search/search.component';

import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
    CommonModule,
    HistoryRoutingModule,
    FormsModule,
    HistoryPageComponent,
    SearchComponent
],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class HistoryModule { }
