import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardSmallComponent } from './dashboard-card-small.component';

describe('DashboardCardSmallComponent', () => {
  let component: DashboardCardSmallComponent;
  let fixture: ComponentFixture<DashboardCardSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCardSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
