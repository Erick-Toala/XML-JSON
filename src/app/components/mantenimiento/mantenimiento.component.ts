import { Component } from '@angular/core';
import { CargarScriptsService } from './../../cargar-scripts.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent
{
  constructor(private _CargaScripts:CargarScriptsService)
  {
    _CargaScripts.Carga(["main"]);
  }
}
