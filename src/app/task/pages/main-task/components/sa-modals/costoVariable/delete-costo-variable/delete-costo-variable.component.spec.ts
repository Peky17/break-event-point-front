import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCostoVariableComponent } from './delete-costo-variable.component';

describe('DeleteCostoVariableComponent', () => {
  let component: DeleteCostoVariableComponent;
  let fixture: ComponentFixture<DeleteCostoVariableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCostoVariableComponent]
    });
    fixture = TestBed.createComponent(DeleteCostoVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
