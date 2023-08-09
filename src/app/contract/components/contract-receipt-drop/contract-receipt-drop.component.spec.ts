import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractReceiptDropComponent } from './contract-receipt-drop.component';

describe('ContractReceiptDropComponent', () => {
  let component: ContractReceiptDropComponent;
  let fixture: ComponentFixture<ContractReceiptDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractReceiptDropComponent]
    });
    fixture = TestBed.createComponent(ContractReceiptDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
