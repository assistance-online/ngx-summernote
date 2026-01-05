import { AppComponent } from './app.component';
import { NgxSummernoteDirective } from 'ngx-summernote';
import { ReactiveFormsModule } from '@angular/forms';
import { TestBed, waitForAsync } from '@angular/core/testing';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, NgxSummernoteDirective, AppComponent],
      providers: [provideHttpClient(withInterceptorsFromDi())],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
