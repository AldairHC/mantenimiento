import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mantenimiento } from '../model/mantenimiento';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {
  baseUrl = 'http://localhost:9090/mantenimiento';

  constructor(private httpClient: HttpClient) { }

  public ListaMantenimiento(): Observable<Mantenimiento[]> {
    return this.httpClient.get<Mantenimiento[]>(this.baseUrl);
  }

  public MantenimientoPorId(codigo: number): Observable<Mantenimiento> {
    return this.httpClient.get<Mantenimiento>(this.baseUrl + `/${codigo}`);
  }


  public GuardarMantenimiento(mantenimiento: Mantenimiento): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, mantenimiento);
  }

  public ActualizarMantenimiento(codigo: number, mantenimiento: Mantenimiento): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${codigo}`, mantenimiento);
  }

  public ElimnarMantenimiento(codigo: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${codigo}`);
  }
}
