import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationGetComponent } from './location-get.component';

describe('LocationGetComponent', () => {
  let component: LocationGetComponent;
  let fixture: ComponentFixture<LocationGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
