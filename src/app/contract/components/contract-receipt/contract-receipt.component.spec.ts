import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractReceiptComponent } from './contract-receipt.component';

describe('ContractReceiptComponent', () => {
  let component: ContractReceiptComponent;
  let fixture: ComponentFixture<ContractReceiptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractReceiptComponent]
    });
    fixture = TestBed.createComponent(ContractReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
