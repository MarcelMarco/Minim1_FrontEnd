import { Component } from '@angular/core';
import { Notificacion } from 'src/models/notificacion';
import { NotificacionService } from 'src/service/notificacion.service';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';
import { SharedDataService } from 'src/service/challenge.sharedservices';

@Component({
  selector: 'app-listnotificaciones',
  templateUrl: './listnotificaciones.component.html',
  styleUrls: ['./listnotificaciones.component.scss']
})

export class ListnotificacionesComponent {
  model:Notificacion = {_id:'',name:'', descr:'', prioridad:0, enviada:false}  

  constructor(private notificacionService: NotificacionService, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.obtenerNotificaciones();
    this.sharedDataService.notificacionAdded.subscribe(() => {
      this.obtenerNotificaciones();
    });
  }

  notificacions: Notificacion [] = [];

  obtenerNotificaciones(){
    this.notificacionService.getNotificaciones().subscribe(data => {
      this.notificacions = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarNotificacion(id:string){
    var answer = confirm('Estas seguro de querer eliminarlo?');
    if(answer){
      this.notificacionService.deleteNotificaciones(id).subscribe(data => {
        this.obtenerNotificaciones();    
      }, error => {
        console.log(error);
      })
    }    
  }

  editarNotificacion(i:any){
    this.sharedDataService.notificacion = this.notificacions[i];
    this.sharedDataService.editClickedNotificacion.next(true);
  }

}
