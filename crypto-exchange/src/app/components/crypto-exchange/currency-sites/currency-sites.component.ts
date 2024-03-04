import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { Observable, switchMap } from 'rxjs';
import { ExchangeData } from 'src/app/models/exchangeData.model';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-currency-sites',
  templateUrl: './currency-sites.component.html',
  styleUrls: ['./currency-sites.component.css'],
})
export class CurrencySitesComponent implements OnInit {
  exchangeIds: string[] = [];
  assetIds: string[] = [];
  iconUrls: string[] = [];

  constructor(
    private apiService: ApiServicesService,
    private readonly localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {}
}
