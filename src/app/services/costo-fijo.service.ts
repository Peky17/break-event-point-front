import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CostoFijoResponse {
  id: number;
  descripcion: string;
  monto: number;
}

@Injectable({
  providedIn: 'root',
})
export class CostoFijoService {
  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getCostoFijoList(): Observable<CostoFijoResponse[]> {
    return this.httpClient.get<CostoFijoResponse[]>(
      `${this.baseUrl}/api/v1/costos-fijos`
    );
  }

  createCostoFijo(newCostoFijo: any): Observable<CostoFijoResponse> {
    return this.httpClient.post<CostoFijoResponse>(
      `${this.baseUrl}/api/v1/costos-fijos`,
      newCostoFijo,
      {}
    );
  }

  updateCostoFijo(updatedCostoFijo: any): Observable<CostoFijoResponse> {
    return this.httpClient.put<CostoFijoResponse>(
      `${this.baseUrl}/api/v1/costos-fijos/${updatedCostoFijo.id}`,
      updatedCostoFijo,
      {}
    );
  }

  deleteCostoFijo(id: number): Observable<CostoFijoResponse> {
    return this.httpClient.delete<CostoFijoResponse>(
      `${this.baseUrl}/api/v1/costos-fijos/${id}`
    );
  }

  getCostoFijoById(id: number): Observable<CostoFijoResponse> {
    return this.httpClient.get<CostoFijoResponse>(
      `${this.baseUrl}/api/v1/costos-fijos/${id}`
    );
  }
}
