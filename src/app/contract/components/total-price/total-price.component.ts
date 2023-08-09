import { Component } from '@angular/core';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss']
})
export class TotalPriceComponent {
  data=[
    {title:'السعر الكلي المدفوع', price:'300 ر.س'},
    {title:'السعر الكلي المتبقي)', price:'300 ر.س'},
    {title:'الحد الإئتماني', price:'300 ر.س'},
  ]
}
