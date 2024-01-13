import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsLocationComponent } from './about-us-location.component';

describe('AboutUsLocationComponent', () => {
  let component: AboutUsLocationComponent;
  let fixture: ComponentFixture<AboutUsLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsLocationComponent]
    });
    fixture = TestBed.createComponent(AboutUsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
