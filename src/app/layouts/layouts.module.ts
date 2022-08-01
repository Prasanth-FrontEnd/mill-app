import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppSidenavComponent } from './app-sidenav/app-sidenav.component';
import { AppFooterComponent } from './app-footer/app-footer.component';



@NgModule({
  declarations: [
    AppSidenavComponent,
    AppNavbarComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppSidenavComponent,
    AppNavbarComponent,
    AppFooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule { }
