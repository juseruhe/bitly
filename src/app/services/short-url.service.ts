import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

 

  URL = ' https://api-ssl.bitly.com/v4/shorten';
  token = '7264bbb8a5828dc30ea90dedd6af14c24998afb1'

  constructor(private http: HttpClient) { }


  getUrlShort(nombreUrl: string): Observable<any>{

  //const tokenHeader = new HttpHeaders({Authorization: 'Bearer '+this.token});

    const body = {

      long_url: nombreUrl
    }

    return this.http.post(this.URL,body).pipe(catchError((error: HttpErrorResponse) => {

      console.log(error);

      return throwError(error)
    }));

  }
}
