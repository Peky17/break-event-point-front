import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface NumberResponse {
  value: number;
}

interface GraphDataResponse {
  index: number;
  costoTotal: number;
  ingresoOfVenta: number;
}

@Injectable({
  providedIn: 'root',
})
export class BreakEventPointService {
  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getTotalCV(): Observable<NumberResponse> {
    return this.httpClient.get<NumberResponse>(
      `${this.baseUrl}/api/v1/operaciones/getTotalCV`
    );
  }

  getTotalCF(): Observable<NumberResponse> {
    return this.httpClient.get<NumberResponse>(
      `${this.baseUrl}/api/v1/operaciones/getTotalCF`
    );
  }

  getCantidadEquilibrio(
    precioUnitarioVenta: number
  ): Observable<NumberResponse> {
    return this.httpClient.get<NumberResponse>(
      `${this.baseUrl}/api/v1/operaciones/getCantidadEquilibrio?precioUnitarioVenta=${precioUnitarioVenta}`
    );
  }

  getIngresoEquilibrio(
    precioUnitarioVenta: number
  ): Observable<NumberResponse> {
    return this.httpClient.get<NumberResponse>(
      `${this.baseUrl}/api/v1/operaciones/getIngresoEquilibrio?precioUnitarioVenta=${precioUnitarioVenta}`
    );
  }

  getGraphData(
    unitPriceVenta: number,
    qtyUnidades: number
  ): Observable<GraphDataResponse> {
    return this.httpClient.get<GraphDataResponse>(
      `${this.baseUrl}/api/v1/operaciones/graphData?qtyUnidades=${qtyUnidades}&unitPriceVenta=${unitPriceVenta}`
    );
  }
}
