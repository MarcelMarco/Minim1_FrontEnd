import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notificacion } from 'src/models/notificacion';

@Injectable({
  providedIn: 'root'
})

export class NotificacionService {
  url = 'http://127.0.0.1:3002/notificacion';

  constructor(private http: HttpClient) { }

  getNotificaciones(): Observable<Notificacion[]> {
    return this.http.get<Notificacion[]>(this.url + '/get/all');
  }

  addNotificaciones(notificacion: Notificacion): Observable<any>{
    return this.http.post(this.url + '/add', notificacion);
  }

  deleteNotificaciones(id: String): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  } 

  actualizarNotificaciones(id:String, notificacion: Notificacion): Observable<any>{
    return this.http.post(this.url + '/update/' + id, notificacion);
  }

}