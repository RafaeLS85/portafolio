import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public productosService:ProductosService) { 


  }

  ngOnInit(): void {
  }

}
