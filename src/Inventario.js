class Inventario {
  constructor(deposito, interfazGrafica) {
    this.deposito = deposito;
    this.interfazGrafica = interfazGrafica;
  }
  async agregarProducto(nombreDelProducto) {
    await this.deposito.guardar(nombreDelProducto)
    this.interfazGrafica.agregarAlInventario(nombreDelProducto);
  }
}

export default Inventario;