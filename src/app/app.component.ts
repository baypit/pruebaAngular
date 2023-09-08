import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './Modelo/Cliente';
import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente';

  clienteEdit:Cliente=new Cliente("codigo","nombre",  "apellido", 1, "cuenta", false, new Date() );
  cliente:Cliente=new Cliente("codigo","nombre",  "apellido", 1, "cuenta", false, new Date() );
  promo: boolean  | undefined ; 

  constructor(private router:Router, private service:ServiceService,){
    
  }


  obtenerCliente(){
    let codigo = this.clienteEdit.codigo;
    console.log("id --"+codigo);
    
    if(codigo != null){
      this.service.getClienteId(codigo+"").subscribe(data =>{
        console.log("ingreso");
        console.log("data " +data);
        this.cliente=data;
        this.promo = true;
      })
    }
  }
}