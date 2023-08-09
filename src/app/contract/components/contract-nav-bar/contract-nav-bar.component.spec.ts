import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractNavBarComponent } from './contract-nav-bar.component';

describe('ContractNavBarComponent', () => {
  let component: ContractNavBarComponent;
  let fixture: ComponentFixture<ContractNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractNavBarComponent]
    });
    fixture = TestBed.createComponent(ContractNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
