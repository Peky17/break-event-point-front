import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostosVariablesComponent } from './costos-variables.component';

describe('CostosVariablesComponent', () => {
  let component: CostosVariablesComponent;
  let fixture: ComponentFixture<CostosVariablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostosVariablesComponent]
    });
    fixture = TestBed.createComponent(CostosVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
