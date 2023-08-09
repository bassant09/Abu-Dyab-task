import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContractComponent } from './main-contract.component';

describe('MainContractComponent', () => {
  let component: MainContractComponent;
  let fixture: ComponentFixture<MainContractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainContractComponent]
    });
    fixture = TestBed.createComponent(MainContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
