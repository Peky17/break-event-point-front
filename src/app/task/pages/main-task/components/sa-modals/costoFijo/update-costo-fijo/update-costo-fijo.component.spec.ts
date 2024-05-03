import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCostoFijoComponent } from './update-costo-fijo.component';

describe('UpdateCostoFijoComponent', () => {
  let component: UpdateCostoFijoComponent;
  let fixture: ComponentFixture<UpdateCostoFijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCostoFijoComponent]
    });
    fixture = TestBed.createComponent(UpdateCostoFijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
