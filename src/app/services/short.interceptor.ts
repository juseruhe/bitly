import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = '7264bbb8a5828dc30ea90dedd6af14c24998afb1'
    request = request.clone({setHeaders: {Authorization: 'Bearer '+token}})
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {

      console.log(error);

      return throwError(error)
    }));
  }
}
