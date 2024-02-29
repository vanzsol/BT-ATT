import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crypto-exchange',
  templateUrl: './crypto-exchange.component.html',
  styleUrls: ['./crypto-exchange.component.css'],
})
export class CryptoExchangeComponent {
  tabs: string[] = [];
  @ViewChild('myModal') myModal: any;

  constructor(private modalService: NgbModal) {}

  addTab() {
    const newTab = `Tab ${this.tabs.length + 1}`;
    this.tabs.push(newTab);
  }

  openModal(tab: string) {
    const modalRef = this.modalService.open(this.myModal, { centered: true });
    modalRef.componentInstance.tab = tab;
  }
}
