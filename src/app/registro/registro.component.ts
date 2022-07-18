import { CargarScriptsService } from '../services/load-scripts/cargar-scripts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService) {
    _CargaScripts.Carga(["formulario"])
   }

  ngOnInit(): void {
  }

}
