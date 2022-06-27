import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../cargar-scripts.service';

@Component({
  selector: 'app-cursot',
  templateUrl: './cursot.component.html',
  styleUrls: ['./cursot.component.css']
})
export class CursotComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService) {
    _CargaScripts.Carga(["cart"])
   }

  ngOnInit(): void {
  }

}
