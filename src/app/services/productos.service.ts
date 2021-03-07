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
  productoFiltrado: Productos[] = [];

  constructor(private http:HttpClient) {
    this.cargarProductos();
   }



  private  cargarProductos(){


    return new Promise<void>((resolve, reject)=>{

      this.http.get(`${environment.url}/productos_idx.json`)
      .subscribe((resp:Productos[])=>{
        // console.log(resp);
        this.productos = resp;
        this.cargando = false;
        resolve();
        // setTimeout(()=>this.cargando = false, 1500)
        
      })

    })

    
  }

  getProductos(id:string){      
  
    return this.http.get(`${ environment.url }/productos/${ id }.json`);    
              
  }


   buscarProducto(termino:string){


    if(this.productos.length === 0){
      this.cargarProductos().then(()=>{
        this.filtrarProductos(termino);

      })

    }else{
      this.filtrarProductos(termino);
    }


  }

  private filtrarProductos(termino:string){  


    termino = termino.toLowerCase();
    this.productoFiltrado = [];

    this.productos.forEach(prod=>{

      const tituloLower = prod.titulo.toLowerCase();


      if(prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0){
        this.productoFiltrado.push( prod );

      }
    })


    console.log(this.productoFiltrado)

  }






}
