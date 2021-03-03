import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    ///servicio firebase:
    // https://portfolio2021-14e43-default-rtdb.firebaseio.com/equipo.json
  }

}
