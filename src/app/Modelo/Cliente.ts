export class Cliente{

    

    id:number;
    codigo:string;
    nombre:string;
    apellido:string;
    edad:number;
    cuenta: string;
    empleado: boolean;
    cargo: string;
    fechaCreacion: Date;

    constructor(id:number,codigo: string,nombre: string,  apellido:string, edad:number, cuenta: string, empleado: boolean, cargo: string,fechaCreacion:Date ){
        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cuenta = cuenta;
        this.empleado = empleado;
        this.cargo = cargo;
        this.fechaCreacion = fechaCreacion;
        
    }

   
}