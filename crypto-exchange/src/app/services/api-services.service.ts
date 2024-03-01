import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  private apiUrl = 'https://rest.coinapi.io/v1';

  private apiKey = '4DD949E7-4D66-4C24-940B-A4F68C41D9F9';

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

  getExchangeIds(): Observable<any> {
    const headers = {
      'X-CoinAPI-Key': this.apiKey,
    };

    return this.http.get(`${this.apiUrl}/exchanges`, {
      headers,
    });
  }

  getAssetsId(): Observable<any> {
    const headers = {
      'X-CoinAPI-Key': this.apiKey,
    };

    return this.http.get(`${this.apiUrl}/assets`, {
      headers,
    });
  }
}
