import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainNavBarComponent } from './components/nav-bar/main-nav-bar/main-nav-bar.component';
import { OffcanvsNavBarComponent } from './components/nav-bar/offcanvs-nav-bar/offcanvs-nav-bar.component';
import { CustomTitleComponent } from './components/custom-title/custom-title.component';
import { RightStaticNavBarComponent } from './components/nav-bar/right-static-nav-bar/right-static-nav-bar.component';



@NgModule({
  declarations: [
    NavBarComponent,
    MainNavBarComponent,
    OffcanvsNavBarComponent,
    CustomTitleComponent,
    RightStaticNavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainNavBarComponent,
    OffcanvsNavBarComponent,
    CustomTitleComponent,
    RightStaticNavBarComponent
  ]
})
export class SharedModule { }
