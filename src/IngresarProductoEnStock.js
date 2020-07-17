class IngresarProductoEnStock {
  constructor(inventario) {
    this.inventario = inventario;
  }
  ejecutar(nombreDelProducto) {
    this.inventario.agregarProducto(nombreDelProducto);
  }
}

export default IngresarProductoEnStock;