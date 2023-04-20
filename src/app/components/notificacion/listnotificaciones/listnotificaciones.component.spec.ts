import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnotificacionesComponent } from './listnotificaciones.component';

describe('ListnotificacionesComponent', () => {
  let component: ListnotificacionesComponent;
  let fixture: ComponentFixture<ListnotificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnotificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListnotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
