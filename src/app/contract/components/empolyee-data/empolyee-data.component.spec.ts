import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeeDataComponent } from './empolyee-data.component';

describe('EmpolyeeDataComponent', () => {
  let component: EmpolyeeDataComponent;
  let fixture: ComponentFixture<EmpolyeeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpolyeeDataComponent]
    });
    fixture = TestBed.createComponent(EmpolyeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
