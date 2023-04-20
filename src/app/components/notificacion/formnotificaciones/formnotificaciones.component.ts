import { Component } from '@angular/core';
import { SharedDataService } from 'src/service/challenge.sharedservices';
import { NotificacionService } from 'src/service/notificacion.service';

@Component({
  selector: 'app-formnotificaciones',
  templateUrl: './formnotificaciones.component.html',
  styleUrls: ['./formnotificaciones.component.scss']
})
export class FormnotificacionesComponent {
  model:any = {name:'', descr:'', prioridad:0, enviada:false}

  constructor(private notificacionService: NotificacionService, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
  }

  addNotificacion(){
    this.notificacionService.addNotificaciones(this.model).subscribe(data => {
      this.model = {name:'', descr:'', prioridad:0, enviada:false};   
      this.sharedDataService.notificacionAdded.next(true);   
    }, error => {
      console.log(error);
    })
  }

}
