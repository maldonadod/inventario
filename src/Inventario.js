import ProductoEnStock from "./ProductoEnStock";

class Inventario {
  constructor(deposito, interfazGrafica) {
    this.deposito = deposito;
    this.interfazGrafica = interfazGrafica;
  }
  agregarProducto(nombreDelProducto) {
    this.deposito.guardar(new ProductoEnStock(nombreDelProducto))
    this.interfazGrafica.agregarAlInventario(nombreDelProducto);
  }
}

export default Inventario;