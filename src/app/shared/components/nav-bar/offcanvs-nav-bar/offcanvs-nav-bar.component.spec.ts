import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvsNavBarComponent } from './offcanvs-nav-bar.component';

describe('OffcanvsNavBarComponent', () => {
  let component: OffcanvsNavBarComponent;
  let fixture: ComponentFixture<OffcanvsNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffcanvsNavBarComponent]
    });
    fixture = TestBed.createComponent(OffcanvsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
