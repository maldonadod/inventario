class IngresarProductoEnStock {
  constructor(inventario) {
    this.inventario = inventario;
  }
  async ejecutar(nombreDelProducto) {
    await this.inventario.agregarProducto(nombreDelProducto);
  }
}

export default IngresarProductoEnStock;