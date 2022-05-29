import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Inject, Injectable, Injector } from '@angular/core';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(@Inject(Injector) private readonly injector: Injector) { }

  //  To avoid cyclic dependency
  private get alert() {
    return this.injector.get(AlertService);
  }

  // this function handles all errors including http error, client side error, etc
  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      this.alert.error('Something went wrong, Please try again!');
    } else {
      this.alert.error('Something went wrong, Please try again!');
    }
  }
}
