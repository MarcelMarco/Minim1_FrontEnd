import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifynotificacionesComponent } from './modifynotificaciones.component';

describe('ModifynotificacionesComponent', () => {
  let component: ModifynotificacionesComponent;
  let fixture: ComponentFixture<ModifynotificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifynotificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifynotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
