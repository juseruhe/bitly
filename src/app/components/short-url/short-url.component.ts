import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  nombreUrl: string;

  urlShort: string;

  urlProcesada: boolean;

  loading: boolean;

  mostrarError: boolean;

  textError: string;

  constructor(private _shortUrlService: ShortUrlService) { 
    this.nombreUrl = "";
    this.urlShort = "";
    this.urlProcesada = false;
    this.loading = false;
    this.mostrarError = false;
    this.textError = "";

  }

  ngOnInit(): void {
  }

  procesarUrl(){

    // URL Vacio

  if(this.nombreUrl == ""){

    this.mostrarError = true;

    this.textError = "Por favor Ingrese una URL"

    setTimeout(()=>{

     this.mostrarError = false;
    },4000)

    return
  }

    this.urlProcesada = false

    this.loading = true;

    setTimeout(() => {

      this.obtenerUrlShort()
    },2000)

  


  }

  obtenerUrlShort(){

    this._shortUrlService.getUrlShort(this.nombreUrl).subscribe(data => {

      this.loading= false;
      this.urlProcesada = true;
      this.urlShort = data.link
    });

  }

}
