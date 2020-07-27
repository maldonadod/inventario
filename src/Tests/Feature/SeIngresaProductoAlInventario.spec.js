import IngresarProductoAOrdenDeCompra from "../../Controllers/IngresarProductoAOrdenDeCompra"
import Orden from "../../Domain/Orden"

class InterfazGrafica {
  constructor() {
    this.productosDeLaOrdenDeCompra = [];
  }
  mostrarOrdenDeCompra(ordenDeCompra) {
    this.productosDeLaOrdenDeCompra = ordenDeCompra.productos;
  }
  haMostradoEnOrdenDeCompra(nombreProducto) {
    expect(this.productosDeLaOrdenDeCompra).toContain(nombreProducto);
  }
}
class RepositorioFake {
  constructor() {
    this.productos = []
  }
  observar(observador) {
    observador.ejecutar(this.productos);
  }
  agregar(n) {
    this.productos.push(n);
  }
}

describe("IngresarProductoAOrdenDeCompra", () => {
  const repositorio = new RepositorioFake()
  const interfaz = new InterfazGrafica();
  const orden = new Orden(repositorio, interfaz);
  const ingresar = new IngresarProductoAOrdenDeCompra(orden);
  it("debe mostrar el producto en la orden de compra", () => {
    const req = {
      nombre: "pan"
    }
    ingresar.ejecutar(req);

    interfaz.haMostradoEnOrdenDeCompra("pan")
  })
})