import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-title',
  templateUrl: './custom-title.component.html',
  styleUrls: ['./custom-title.component.scss']
})
export class CustomTitleComponent {
 @Input() data:any;
 @Input() fontSize:any='14px';
}
