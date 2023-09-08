export class Cliente{

    

    id:number | undefined;
    codigo:string;
    nombre:string;
    apellido:string;
    edad:number;
    cuenta: string;
    empleado: boolean;
    fechaCreacion: Date;

    constructor(codigo: string,nombre: string,  apellido:string, edad:number, cuenta: string, empleado: boolean, fechaCreacion:Date ){
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cuenta = cuenta;
        this.empleado = empleado;
        this.fechaCreacion = fechaCreacion;
        
    }

   
}