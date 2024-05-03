import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCostoVariableComponent } from './update-costo-variable.component';

describe('UpdateCostoVariableComponent', () => {
  let component: UpdateCostoVariableComponent;
  let fixture: ComponentFixture<UpdateCostoVariableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCostoVariableComponent]
    });
    fixture = TestBed.createComponent(UpdateCostoVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
