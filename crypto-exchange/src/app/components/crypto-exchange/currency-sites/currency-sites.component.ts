import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeData } from 'src/app/models/exchangeData.model';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-currency-sites',
  templateUrl: './currency-sites.component.html',
  styleUrls: ['./currency-sites.component.css'],
})
export class CurrencySitesComponent implements OnInit {
  exchangeSymbols: ExchangeData[] = [];
  exchangeIds: string[] = [];

  constructor(private apiService: ApiServicesService) {}

  ngOnInit(): void {
    //   this.apiService.getSymbols().subscribe((data) => {
    //     console.log(data);
    //   });
    // }
    // this.apiService.getSymbols().subscribe((data) => {
    //   this.exchangeSymbols = data;
    // });
    // this.apiService.getSymbols().subscribe((data) => {
    //   this.exchangeSymbols = data.map((item: ExchangeData) => item.exchange_id);
    // });
    // this.apiService.getExchangeIds().subscribe(
    //   (data) => {
    //     this.exchangeIds = data.map((item: any) => item.exchange_id);
    //   },
    //   (error) => {
    //     console.error('Hiba történt a lekérdezés során:', error);
    //   }
    // );
    //   this.apiService.getAssetsId().subscribe(
    //     (data) => {
    //       this.exchangeIds = data.map((item: ExchangeData) => item.url).sort();
    //     },
    //     (error) => {
    //       console.error('Hiba történt a lekérdezés során:', error);
    //     }
    //   );
    // }
    // this.apiService.getAssetsIcon().subscribe(
    //   (data) => {
    //     this.exchangeIds = data.map((item: ExchangeData) => item.url).sort();
    //   },
    //   (error) => {
    //     console.error('Hiba történt a lekérdezés során:', error);
    //   }
    // );
  }
}
