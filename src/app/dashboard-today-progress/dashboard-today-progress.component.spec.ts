import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTodayProgressComponent } from './dashboard-today-progress.component';

describe('DashboardTodayProgressComponent', () => {
  let component: DashboardTodayProgressComponent;
  let fixture: ComponentFixture<DashboardTodayProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTodayProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTodayProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
