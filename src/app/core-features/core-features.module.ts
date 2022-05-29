import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../core-features/spinner/spinner.component';
import { ToastrModule } from 'ngx-toastr';
import { ErrorHandlerService } from './error-handler/error-handler.service';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    ToastrModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
    }),
  ],
  exports:[SpinnerComponent],
  providers: [{ provide: ErrorHandler, useClass: ErrorHandlerService }]
})
export class CoreFeaturesModule { }
