import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu-item',
  templateUrl: './dropdown-menu-item.component.html',
  styleUrls: ['./dropdown-menu-item.component.scss']
})
export class DropdownMenuItemComponent {
  data=[
    {title:'سعر السيارة', price:'300 ر.س'},
    {title:'خصم إداري', price:'0 ر.س'},
    {title:'قيمة الخصم - نقاط', price:'300 ر.س'},
    {title:'قيمة الخصم - كود خصم', price:'300 ر.س'},
    {title:'الخصومات الكلية', price:'300 ر.س'},
  ]
  dataAfterDiscond=[
    {title:'السعر بعد الخصم', price:'300 ر.س'},
    {title:'أمانات مخالفات', price:'300 ر.س'},
    {title:'رصيد الأمانات', price:'300 ر.س'},
    {title:'إيراد يومي', price:'300 ر.س'},
    {title:'إيراد شهرى', price:'300 ر.س'},
    {title:'إيراد إسبوعي', price:'300 ر.س'}
  ]
}
