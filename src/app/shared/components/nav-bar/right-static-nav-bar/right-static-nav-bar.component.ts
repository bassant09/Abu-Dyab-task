import { Component } from '@angular/core';

@Component({
  selector: 'app-right-static-nav-bar',
  templateUrl: './right-static-nav-bar.component.html',
  styleUrls: ['./right-static-nav-bar.component.scss']
})
export class RightStaticNavBarComponent {
  offcanvsList = [
    { name: "الرئيسية", img: "ant-design_home-filled.svg" },
    { name: "الملفات الرئيسية", img: "Frame 1686552367.png" },
    { name: "ملفات الأرقام", img: "ant-design_file-text-filled.svg" },
    { name: "الأستعلامات", img: "bi_question-square-fill.svg" },
    { name: "التقارير", img: "Frame 1686552367 (1).png" },
    { name: "النظام", img: "Frame 1686552367 (2).png" },
  
    // Add more objects as needed
  ];
}
