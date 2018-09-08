import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavDashboardComponent } from './topnav-dashboard.component';

describe('TopnavDashboardComponent', () => {
  let component: TopnavDashboardComponent;
  let fixture: ComponentFixture<TopnavDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
