import { Component } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent {
 data=[
  {title:'إجمالي',price:'570 س.ر',color:'#3BB556'},
  {title:'المتبقي',price:'300 س.ر',color:'#2772E2'}
 ]
}
