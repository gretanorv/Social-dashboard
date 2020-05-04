import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardBigComponent } from './dashboard-card-big.component';

describe('DashboardCardBigComponent', () => {
  let component: DashboardCardBigComponent;
  let fixture: ComponentFixture<DashboardCardBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCardBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
