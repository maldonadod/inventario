class Orden {
  constructor(repositorio, interfaz) {
    this.repositorio = repositorio;
    this.productos = [];
    repositorio.observar({
      ejecutar: (productos) => {
        this.productos = productos;
        interfaz.mostrarOrdenDeCompra(this);
      }
    });
  }
  agregarProducto(nombreProducto) {
    this.repositorio.agregar(nombreProducto);
  }
}

export default Orden;