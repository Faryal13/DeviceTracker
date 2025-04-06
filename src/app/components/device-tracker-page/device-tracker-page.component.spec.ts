import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTrackerPageComponent } from './device-tracker-page.component';

describe('DeviceTrackerPageComponent', () => {
  let component: DeviceTrackerPageComponent;
  let fixture: ComponentFixture<DeviceTrackerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceTrackerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceTrackerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
