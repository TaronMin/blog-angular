import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormValidationDirective} from "./form-validation.directive";
import {InterceptorService} from "./interceptor.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";


@NgModule({
  declarations: [FormValidationDirective],
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  exports: [FormValidationDirective]
})
export class SharedModule {
}
