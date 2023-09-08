import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './Modelo/Cliente';
import { ServiceService } from './Service/service.service';
import { Cuenta } from './Modelo/Cuenta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente';

  clienteEdit:Cliente=new Cliente(1,"codigo","nombre",  "apellido", 1, "cuenta", false, "", new Date() );
  cliente:Cliente=new Cliente(1,"codigo","nombre",  "apellido", 1, "cuenta", false, "",new Date() );
  promo: boolean  | undefined ; 
  movimientos:Cuenta[] | undefined;
  total:number|undefined;

  constructor(private router:Router, private service:ServiceService,){
    
  }


  obtenerCliente(){
    let codigo = this.clienteEdit.codigo;
    console.log("id --"+codigo);
    
    if(codigo != null){
      this.service.getClienteId(codigo+"").subscribe(data =>{
        console.log("ingreso");
        console.log("data " +data);
        if(data!= null){
          this.cliente=data;
        this.obtenerMovimientos(this.cliente.id);
        this.promo = true;
        }else{
          alert("No se encontro usuario");
        }
        
      })
    }
  }

  obtenerMovimientos(idcliente:number ){

    this.service.getMovimiento(idcliente).subscribe(data =>{
      console.log("ingreso");
      console.log("data " +data);
      this.movimientos=data;
      if(data != null){

        this.obtenerTotal(data);
      }
    })
  }

  obtenerTotal(movimientos:Cuenta[] ){
 
    let debitoTotal = 0;
    let creditoTotal = 0;
    
    for(let i = 0 ; i < movimientos.length ; i++){

      if(movimientos[i].tipo == 'debito'){
        debitoTotal+=movimientos[i].saldo;
      }

      if(movimientos[i].tipo == 'credito'){
        creditoTotal+=movimientos[i].saldo;
      }      
    }
    this.total= creditoTotal - debitoTotal;
  }
}