import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCostoFijoComponent } from './create-costo-fijo.component';

describe('CreateCostoFijoComponent', () => {
  let component: CreateCostoFijoComponent;
  let fixture: ComponentFixture<CreateCostoFijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCostoFijoComponent]
    });
    fixture = TestBed.createComponent(CreateCostoFijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
