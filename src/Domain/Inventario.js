class Inventario {
  constructor(deposito, interfazGrafica) {
    this.deposito = deposito;
    this.interfazGrafica = interfazGrafica;
  }
  async agregarProducto(nombreDelProducto) {
    await this.deposito.guardar(nombreDelProducto)
    this.presentarInventario();
  }
  async presentarInventario() {
    const productos = await this.deposito.obtenerTodos();
    this.interfazGrafica.mostrarProductos(productos);
  }
}

export default Inventario;