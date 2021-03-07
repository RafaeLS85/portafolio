import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  constructor(public _servicio: InfoPaginaService, private router: Router) { }

  ngOnInit(): void {
    console.log(this._servicio)
  }

  buscarProducto(termino:string){

    // console.log(termino)


    if( termino.length < 1 ){
      return;
    }else{
      this.router.navigate(['/search', termino])
    }



  }

}
