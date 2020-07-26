import IngresarProductoAOrdenDeCompra from "../../Controllers/IngresarProductoAOrdenDeCompra"

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
class Orden {
  constructor(interfaz) {
    this.interfazGrafica = interfaz;
    this.productos = [];
  }
  agregarProducto(nombreProducto) {
    this.productos.push(nombreProducto);
    this.interfazGrafica.mostrarOrdenDeCompra(this);
  }
}

describe("IngresarProductoAOrdenDeCompra", () => {
  const interfaz = new InterfazGrafica();
  const ingresar = new IngresarProductoAOrdenDeCompra(new Orden(interfaz));
  it("debe mostrar el producto en la orden de compra", () => {
    const req = {
      nombre: "pan"
    }
    ingresar.ejecutar(req);

    interfaz.haMostradoEnOrdenDeCompra("pan")
  })
})