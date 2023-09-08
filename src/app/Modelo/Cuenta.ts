export class Cuenta{

    

    id:number | undefined;
    clienteid:number;
    tipo:string;
    descripcion:string;
    saldo:number;
   

    constructor(clienteid: number,tipo: string,  descripcion: string, saldo:number){
        this.clienteid = clienteid;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.saldo = saldo;
    }

   
}