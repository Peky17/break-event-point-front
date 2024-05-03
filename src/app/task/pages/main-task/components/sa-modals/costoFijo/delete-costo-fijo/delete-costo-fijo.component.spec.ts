import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCostoFijoComponent } from './delete-costo-fijo.component';

describe('DeleteCostoFijoComponent', () => {
  let component: DeleteCostoFijoComponent;
  let fixture: ComponentFixture<DeleteCostoFijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCostoFijoComponent]
    });
    fixture = TestBed.createComponent(DeleteCostoFijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
