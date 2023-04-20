import { Component, Type } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormnotificacionesComponent } from '../formnotificaciones/formnotificaciones.component';
import { ListnotificacionesComponent } from '../listnotificaciones/listnotificaciones.component';
import { ModifychallengeComponent } from '../../challenge/modifychallenge/modifychallenge.component';
import { ModifynotificacionesComponent } from '../modifynotificaciones/modifynotificaciones.component';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Añadir Notificacion', cols: 1, rows: 1 , html: '', component: FormnotificacionesComponent},
          { title: 'Modificar Notificacion', cols: 1, rows: 1 , html: '', component: ModifynotificacionesComponent},
          { title: 'Listado Notificacion', cols: 1, rows: 1 , html: '', component: ListnotificacionesComponent},
        ];
      }

      return [
        { title: 'Añadir Notificacion', cols: 1, rows: 1 , html: '', component: FormnotificacionesComponent},
        { title: 'Modificar Notificacion', cols: 1, rows: 1 , html: '', component: ModifynotificacionesComponent},
        { title: 'Listado Notificacion', cols: 2, rows: 2 , html: '', component: ListnotificacionesComponent},
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
