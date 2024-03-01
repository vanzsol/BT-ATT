import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  private apiUrl = 'https://rest.coinapi.io/v1';

  private apiKey = '6BB4D4E9-DAFC-4FCD-AFD8-A341CEB8EEBE';

  constructor(private http: HttpClient) {}

  getHistoricalData(symbolId: string): Observable<any> {
    const headers = {
      'X-CoinAPI-Key': this.apiKey,
    };
    const endpoint = `${this.apiUrl}/ohlcv/${symbolId}/history`;
    return this.http.get<any>(endpoint, { headers });
  }

  getSymbols(): Observable<any> {
    const headers = {
      'X-CoinAPI-Key': this.apiKey,
    };

    return this.http.get(`${this.apiUrl}/symbols`, {
      headers,
    });
  }
}
