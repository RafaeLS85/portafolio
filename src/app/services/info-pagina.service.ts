import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../models/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  data: InfoPagina = {};
  cargada:boolean = false;
  equipo:any;

  constructor(private http: HttpClient) {  
   this.cargarInfo();
   this.cargarEquipo();
  }


  private cargarInfo(){
      return this.http.get('assets/data/data-pagina.json').subscribe((resp:InfoPagina) => {
        // console.log("Servicio ok");
        this.data = resp;
        this.cargada = true;        
      })
  }


  private cargarEquipo(){
    
   return this.http.get('https://portfolio2021-14e43-default-rtdb.firebaseio.com/equipo.json')
   .subscribe((resp:any) => {
      console.log("Servicio equipo ok", resp);
      this.equipo = resp;          
    })
  }




}
