import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarjugadorComponent } from './agregarjugador.component';

describe('AgregarjugadorComponent', () => {
  let component: AgregarjugadorComponent;
  let fixture: ComponentFixture<AgregarjugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarjugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
