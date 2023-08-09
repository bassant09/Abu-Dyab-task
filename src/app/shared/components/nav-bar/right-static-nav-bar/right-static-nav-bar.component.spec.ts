import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightStaticNavBarComponent } from './right-static-nav-bar.component';

describe('RightStaticNavBarComponent', () => {
  let component: RightStaticNavBarComponent;
  let fixture: ComponentFixture<RightStaticNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightStaticNavBarComponent]
    });
    fixture = TestBed.createComponent(RightStaticNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
