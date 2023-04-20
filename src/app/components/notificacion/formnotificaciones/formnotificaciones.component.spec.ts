import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormnotificacionesComponent } from './formnotificaciones.component';

describe('FormnotificacionesComponent', () => {
  let component: FormnotificacionesComponent;
  let fixture: ComponentFixture<FormnotificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormnotificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormnotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
