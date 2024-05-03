import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CostoVariableResponse {
  id: number;
  descripcion: string;
  monto: number;
}

@Injectable({
  providedIn: 'root',
})
export class CostoVariableService {
  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getCostoVariableList(): Observable<CostoVariableResponse> {
    return this.httpClient.get<CostoVariableResponse>(
      `${this.baseUrl}/api/v1/costos-variables`
    );
  }

  createCostoVariable(
    newCostoVariable: any
  ): Observable<CostoVariableResponse> {
    return this.httpClient.post<CostoVariableResponse>(
      `${this.baseUrl}/api/v1/costos-variables`,
      newCostoVariable,
      {}
    );
  }

  updateCostoVariable(
    updatedCostoVariable: any
  ): Observable<CostoVariableResponse> {
    return this.httpClient.put<CostoVariableResponse>(
      `${this.baseUrl}/api/v1/costos-variables/${updatedCostoVariable.id}`,
      updatedCostoVariable,
      {}
    );
  }

  deleteCostoVariable(id: number): Observable<CostoVariableResponse> {
    return this.httpClient.delete<CostoVariableResponse>(
      `${this.baseUrl}/api/v1/costos-variables/${id}`
    );
  }

  getCostoVariableById(id: number): Observable<CostoVariableResponse> {
    return this.httpClient.get<CostoVariableResponse>(
      `${this.baseUrl}/api/v1/costos-variables/${id}`
    );
  }
}
