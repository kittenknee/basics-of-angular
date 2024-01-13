import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginChildComponent } from './login-child.component';

describe('LoginChildComponent', () => {
  let component: LoginChildComponent;
  let fixture: ComponentFixture<LoginChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginChildComponent]
    });
    fixture = TestBed.createComponent(LoginChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
