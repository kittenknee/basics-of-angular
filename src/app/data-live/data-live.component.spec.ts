import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLiveComponent } from './data-live.component';

describe('DataLiveComponent', () => {
  let component: DataLiveComponent;
  let fixture: ComponentFixture<DataLiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataLiveComponent]
    });
    fixture = TestBed.createComponent(DataLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
