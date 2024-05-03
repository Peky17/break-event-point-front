import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCostoVariableComponent } from './create-costo-variable.component';

describe('CreateCostoVariableComponent', () => {
  let component: CreateCostoVariableComponent;
  let fixture: ComponentFixture<CreateCostoVariableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCostoVariableComponent]
    });
    fixture = TestBed.createComponent(CreateCostoVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
