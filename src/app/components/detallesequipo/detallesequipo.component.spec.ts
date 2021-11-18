import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesequipoComponent } from './detallesequipo.component';

describe('DetallesequipoComponent', () => {
  let component: DetallesequipoComponent;
  let fixture: ComponentFixture<DetallesequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesequipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
