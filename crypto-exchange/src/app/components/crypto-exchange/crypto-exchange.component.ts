import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { switchMap } from 'rxjs';
import { ExchangeData } from 'src/app/models/exchangeData.model';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-crypto-exchange',
  templateUrl: './crypto-exchange.component.html',
  styleUrls: ['./crypto-exchange.component.css'],
})
export class CryptoExchangeComponent implements OnInit {
  tabs: string[] = [];
  assetIds: string[] = [];
  iconUrls: string[] = [];
  optionFG!: FormGroup;

  selectedValue: string = '';

  @ViewChild('myModal') myModal: any;

  constructor(
    private modalService: NgbModal,
    private apiService: ApiServicesService
  ) {}

  addTab() {
    const newTab = `Tab ${this.tabs.length + 1}`;
    this.tabs.push(newTab);
  }
  // addTab(assetId: string) {
  //   const newTab = assetId;
  //   this.tabs.push(newTab);
  // }

  openModal(tab: string) {
    const modalRef = this.modalService.open(this.myModal, { centered: true });
    modalRef.componentInstance.tab = tab;
  }

  // saveSelectedValue(selectedValue: string) {
  //   this.selectedValue = selectedValue;
  // }

  // saveSelectedValue(event: Event) {
  //   const selectedValue = (event.target as HTMLSelectElement).value;
  //   this.selectedValue = selectedValue;
  // }

  saveSelectedValue(selectedIndex: number) {
    const selectedOption = this.assetIds[selectedIndex];
    this.selectedValue = selectedOption;
  }

  get assetId() {
    return this.optionFG.get('assetId');
  }

  ngOnInit(): void {
    // this.apiService.getAssetsId().subscribe(
    //   (data) => {
    //     this.assetIds = data.map((item: ExchangeData) => item.name).sort();
    //   },
    //   (error) => {
    //     console.error('Hiba történt a lekérdezés során:', error);
    //   }
    // );

    // this.apiService.getAssetsIcon().subscribe(
    //   (data) => {
    //     this.iconUrls = data.map((item: ExchangeData) => item.url).sort();
    //   },
    //   (error) => {
    //     console.error('Hiba történt a lekérdezés során:', error);
    //   }
    // );

    // this.optionFG = new FormGroup({
    //   assetId: new FormControl('', []),
    // });

    this.apiService
      .getAssetsId()
      .pipe(
        switchMap((data) => {
          this.assetIds = data.map((item: ExchangeData) => item.name).sort();
          return this.apiService.getAssetsIcon();
        })
      )
      .subscribe(
        (data) => {
          this.iconUrls = data.map((item: ExchangeData) => item.url).sort();
        },
        (error) => {
          console.error('Hiba történt a lekérdezés során:', error);
        }
      );
  }
}
