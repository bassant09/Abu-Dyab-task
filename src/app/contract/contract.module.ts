import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { ContractTableComponent } from './components/contract-table/contract-table.component';
import { MainContractComponent } from './pages/main-contract/main-contract.component';
import { ContractReceiptComponent } from './components/contract-receipt/contract-receipt.component';
import { ContractReceiptDropComponent } from './components/contract-receipt-drop/contract-receipt-drop.component';
import { DropdownMenuItemComponent } from './components/dropdown-menu-item/dropdown-menu-item.component';
import { SharedModule } from '../shared/shared.module';
import { TotalPriceComponent } from './components/total-price/total-price.component';
import { CalculationsComponent } from './components/calculations/calculations.component';
import { ContentCardComponent } from './components/calculations/content-card/content-card.component';
import { EmpolyeeDataComponent } from './components/empolyee-data/empolyee-data.component';
import { DataComponent } from './components/empolyee-data/data/data.component';
import { ContractButtonsComponent } from './components/contract-buttons/contract-buttons.component';
import { ContractNavBarComponent } from './components/contract-nav-bar/contract-nav-bar.component';


@NgModule({
  declarations: [
    ContractComponent,
    ContractTableComponent,
    MainContractComponent,
    ContractReceiptComponent,
    ContractReceiptDropComponent,
    DropdownMenuItemComponent,
    TotalPriceComponent,
    CalculationsComponent,
    ContentCardComponent,
    EmpolyeeDataComponent,
    DataComponent,
    ContractButtonsComponent,
    ContractNavBarComponent,
    ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    SharedModule
  ]
})
export class ContractModule { }
