import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-crypto-exchange',
  templateUrl: './crypto-exchange.component.html',
  styleUrls: ['./crypto-exchange.component.css'],
})
export class CryptoExchangeComponent implements OnInit {
  showModal: boolean = false;

  tabs: string[] = [];
  assetIds: string[] = ['BITCOIN', 'ETHERIUM', 'DOGECOIN'];

  selectedValue: string = '';

  @ViewChild('myModal') myModal: any;

  constructor(
    private loginServices: LoginService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  openModal() {
    const modalRef = this.modalService.open(this.myModal, { centered: true });
  }

  saveCrypto() {
    this.tabs.push(this.selectedValue);
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      localStorage.setItem(
        `userTabs_${savedUsername}`,
        JSON.stringify(this.tabs)
      );
    }
    localStorage.setItem('userTabs', JSON.stringify(this.tabs));
  }

  logout() {
    this.loginServices.logout();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      const savedUserTabs = localStorage.getItem(`userTabs_${savedUsername}`);
      if (savedUserTabs) {
        this.tabs = JSON.parse(savedUserTabs);
      }
    }
  }
}
