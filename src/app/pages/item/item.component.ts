import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public isLoading=true;

  public id:string;

  public producto: Producto;


  constructor(private route: ActivatedRoute, public productosService:ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      
      // console.log(params['id']);    

      this.productosService.getProductos(params['id'])
        .subscribe((resp:Producto)=>{

          this.id = params['id'];

          this.producto = resp;
          // console.log(resp)
        },err => console.log(err)
        ,()=>{
          this.isLoading = false;
        })
      
    
    })


  }

}
