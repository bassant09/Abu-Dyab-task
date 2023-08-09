import { Component } from '@angular/core';

@Component({
  selector: 'app-contract-nav-bar',
  templateUrl: './contract-nav-bar.component.html',
  styleUrls: ['./contract-nav-bar.component.scss']
})
export class ContractNavBarComponent {
  data=[
    "عقد الإيجار","الدفعات","تكاليف إضافية","خصومات","الفواتير الصادرة"
  ]
}
