import { Component } from '@angular/core';
import { Notificacion } from 'src/models/notificacion';
import { SharedDataService } from 'src/service/challenge.sharedservices';
import { NotificacionService } from 'src/service/notificacion.service';

@Component({
  selector: 'app-modifynotificaciones',
  templateUrl: './modifynotificaciones.component.html',
  styleUrls: ['./modifynotificaciones.component.scss']
})
export class ModifynotificacionesComponent {
  model: Notificacion= {_id:'',name:'', descr:'', prioridad:0, enviada:false} 

  constructor(private notificacionService: NotificacionService, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.editClickedNotificacion.subscribe(() => {
      this.model = this.sharedDataService.notificacion;
    });
  } 

  editarNotificacion(id:any){
    this.notificacionService.actualizarNotificaciones(id,this.model).subscribe(data =>{
      this.model = {_id:'',name:'', descr:'', prioridad:0, enviada:false};
      this.sharedDataService.notificacionAdded.next(true);
    }, error => {
      console.log(error);
    })
  }

}
