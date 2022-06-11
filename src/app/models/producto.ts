export class Producto {
    _id?: number;
    nombre: string;
    categoria: string;
    marca: string;
    precio: number;

    constructor(nombre: string, categoria: string, marca: string, precio: number ){
        this.nombre = nombre;
        this.categoria = categoria;
        this.marca = marca;
        this.precio = precio;
    }
}