import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

 

  URL = ' https://api-ssl.bitly.com/v4/shorten';
  token = '7264bbb8a5828dc30ea90dedd6af14c24998afb1'

  constructor() { }
}
