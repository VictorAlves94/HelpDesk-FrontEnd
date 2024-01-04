import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { Cliente } from '../Models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  findById(id:any):Observable<Cliente>{
    return this.http.get<Cliente>(`${API_CONFIG.baseUrl}/clientes/${id}`);
  }

  constructor(private http: HttpClient) { }
   findAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}/clientes`);
  }

  create(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(`${API_CONFIG.baseUrl}/clientes`, cliente);
    
  }

  update(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${API_CONFIG.baseUrl}/clientes/${cliente.id}`,cliente);

  }
  delete(id:any):Observable<Cliente>{
    return this.http.delete<Cliente>(`${API_CONFIG.baseUrl}/clientes/${id}`)

  }


}
