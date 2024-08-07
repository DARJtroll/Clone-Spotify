import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { TracksPageComponent } from './tracks-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TracksPageComponent', () => {
  let component: TracksPageComponent;
  let fixture: ComponentFixture<TracksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, TracksPageComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ]
});
    fixture = TestBed.createComponent(TracksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
