class Stock {
  constructor(memoriaDeProductos, interfazDeUsuario) {
    this.memoriaDeProductos = memoriaDeProductos;
    this.interfazDeUsuario = interfazDeUsuario;
  }
  async guardar(nombreDelProductoAGuardar) {
    try {
      await this.memoriaDeProductos.guardarEnStock(nombreDelProductoAGuardar);
      this.interfazDeUsuario.mostrar(nombreDelProductoAGuardar);
    } catch (error) {
      this.interfazDeUsuario.mostrarError(error.message);     
    }
  }
}

export default Stock;