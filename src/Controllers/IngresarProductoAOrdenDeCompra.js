class IngresarProductoAOrdenDeCompra {
  constructor(orden) {
    this.orden = orden;
  }
  ejecutar(peticion) {
    this.orden.agregarProducto(peticion.nombre);
  }
}

export default IngresarProductoAOrdenDeCompra;