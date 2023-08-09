import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractButtonsComponent } from './contract-buttons.component';

describe('ContractButtonsComponent', () => {
  let component: ContractButtonsComponent;
  let fixture: ComponentFixture<ContractButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractButtonsComponent]
    });
    fixture = TestBed.createComponent(ContractButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
