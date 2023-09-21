import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { PlaylistBodyComponent } from './playlist-body.component';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

describe('PlaylistBodyComponent', () => {
  let component: PlaylistBodyComponent;
  let fixture: ComponentFixture<PlaylistBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [
        PlaylistBodyComponent,
        OrderListPipe
      ]
    });
    fixture = TestBed.createComponent(PlaylistBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
