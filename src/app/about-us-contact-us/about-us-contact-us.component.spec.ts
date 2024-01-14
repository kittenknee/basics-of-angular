import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsContactUsComponent } from './about-us-contact-us.component';

describe('AboutUsContactUsComponent', () => {
  let component: AboutUsContactUsComponent;
  let fixture: ComponentFixture<AboutUsContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsContactUsComponent]
    });
    fixture = TestBed.createComponent(AboutUsContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
