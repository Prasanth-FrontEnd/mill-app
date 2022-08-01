import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';




@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule
  ],
  exports: [
    SignInComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignInModule { }
