import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contract-receipt',
  templateUrl: './contract-receipt.component.html',
  styleUrls: ['./contract-receipt.component.scss']
})
export class ContractReceiptComponent {
 @Input() title:any={};
}
