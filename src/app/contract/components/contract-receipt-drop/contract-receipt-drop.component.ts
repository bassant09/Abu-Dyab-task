import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contract-receipt-drop',
  templateUrl: './contract-receipt-drop.component.html',
  styleUrls: ['./contract-receipt-drop.component.scss']
})
export class ContractReceiptDropComponent {
  @Input() title:any={};
}
