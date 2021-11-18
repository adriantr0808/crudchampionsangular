import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedacomponentComponent } from './busquedacomponent.component';

describe('BusquedacomponentComponent', () => {
  let component: BusquedacomponentComponent;
  let fixture: ComponentFixture<BusquedacomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedacomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
