import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HandleErrorService } from '../shared/services/handle-error.service';

export class handleErrorInterceptor implements HttpInterceptor{
  handleErrorService = inject(HandleErrorService)
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(this.handleErrorService.logErrorResponse)
    );
  }
}


