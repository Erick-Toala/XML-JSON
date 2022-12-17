import { Component } from '@angular/core';
import clientesJson from 'src/assets/json/clientes.json';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {
  Clientes: any = clientesJson;
}
