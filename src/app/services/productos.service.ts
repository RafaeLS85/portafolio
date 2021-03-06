import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Productos } from '../models/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Productos[] = [];

  constructor(private http:HttpClient) {
    this.cargarProductos();
   }



  private cargarProductos(){

    this.http.get(`${environment.url}/productos_idx.json`)
              .subscribe((resp:Productos[])=>{
                console.log(resp);
                this.productos = resp;
                this.cargando = false;
                // setTimeout(()=>this.cargando = false, 1500)
                
              })


  }





}
