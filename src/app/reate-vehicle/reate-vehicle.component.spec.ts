import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReateVehicleComponent } from './reate-vehicle.component';

describe('ReateVehicleComponent', () => {
  let component: ReateVehicleComponent;
  let fixture: ComponentFixture<ReateVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReateVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReateVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
