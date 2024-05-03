import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostosFijosComponent } from './costos-fijos.component';

describe('CostosFijosComponent', () => {
  let component: CostosFijosComponent;
  let fixture: ComponentFixture<CostosFijosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostosFijosComponent]
    });
    fixture = TestBed.createComponent(CostosFijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
