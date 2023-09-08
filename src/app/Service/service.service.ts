import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/Producto';
import { Cuenta } from '../Modelo/Cuenta';
import { Cliente } from '../Modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  Url='http://localhost:8080/api/productos';

  
  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }

  createProducto(producto: Producto){
    let Url='http://localhost:8080/api/registroProducto';
    return this.http.post<Producto>(Url,producto);
  }

  getProductoId(id:number){
    console.log("id "+id)
    let Url='http://localhost:8080/api/listarProductoId';
    return this.http.post<Producto>(Url,id);
  }

  updateProducto(producto:Producto){
    console.log("ipersona "+producto.id);
    console.log("ipersona nombre "+producto.nombre);
    let Url='http://localhost:8080/api/editarProducto';
    return this.http.post<Producto>(Url, producto);
   
  }

  venderProducto(producto:Producto){
    console.log("iproducto "+producto.id);
    console.log("producto nombre "+producto.nombre);
    let Url='http://localhost:8080/api/venderProducto';
    return this.http.post<Producto>(Url, producto);
   
  }

  ingresarProducto(producto:Producto){
    console.log("iproducto "+producto.id);
    console.log("producto nombre "+producto.nombre);
    let Url='http://localhost:8080/api/ingresarProducto';
    return this.http.post<Producto>(Url, producto);
   
  }

  deleteProducto(producto:Producto){
    console.log("ipersona "+producto.id);
    console.log("ipersona nombre "+producto.nombre);
    return this.http.delete<Producto>(this.Url+"/"+producto.id)
   
  }

  registrarCuenta(Cuenta: Cuenta){
    let Url='http://localhost:8080/api/registroCuenta';
    return this.http.post<Cuenta>(Url,Cuenta);
  }

  getCuenta(){
    let Url='http://localhost:8080/api/Cuenta';
    return this.http.get<Cuenta[]>(Url);
  }

  getClienteId(id:string){
    console.log("id-- "+id)
    let Url='http://localhost:8080/cliente/listarClienteId?cliente='+id;
    return this.http.get<Cliente>(Url);
  }

  getMovimiento(idCliente:number){
    console.log("idCliente-- "+idCliente)
    let Url='http://localhost:8080/cuenta/listarMovimientos?cliente='+idCliente;
    return this.http.get<Cuenta[]>(Url);
  }

}
