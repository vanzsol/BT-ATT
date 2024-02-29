import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  private HistoricalDataUrl = 'https://rest.coinapi.io/v1';

  constructor(private http: HttpClient) {}

  getHistoricalData(symbolId: string): Observable<any> {
    const endpoint = `${this.HistoricalDataUrl}/ohlcv/${symbolId}/history`;
    return this.http.get<any>(endpoint);
  }
}
