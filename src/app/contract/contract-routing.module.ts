import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from './contract.component';
import { MainContractComponent } from './pages/main-contract/main-contract.component';

const routes: Routes = [{ path: '', component: ContractComponent ,children:[
  { path: 'contract', component: MainContractComponent},
  { path: '', redirectTo: 'contract', pathMatch: 'full' },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
