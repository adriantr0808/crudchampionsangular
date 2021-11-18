import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevojugadorComponent } from './nuevojugador.component';

describe('NuevojugadorComponent', () => {
  let component: NuevojugadorComponent;
  let fixture: ComponentFixture<NuevojugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevojugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevojugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
