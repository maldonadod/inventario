import IngresarProductoEnStock from "./IngresarProductoEnStock";
import Inventario from "./Inventario";
import Deposito from "./Deposito";

class InterfazGrafica {
  constructor() {
    this.inventario = [];
  }
  agregarAlInventario(productoNombre) {
    this.inventario.push(productoNombre);
  }
  inventarioContiene(productoNombre) {
    expect(this.inventario).toContain(productoNombre);
  }
}

describe("IngresarProductoEnStock", () => {
  const interfazGrafica = new InterfazGrafica();
  const deposito = new Deposito();
  const inventario = new Inventario(deposito, interfazGrafica);
  const ingresar = new IngresarProductoEnStock(inventario);
  it("debe guardar pan en el deposito y actualizar el inventario", async () => {
    await ingresar.ejecutar("pan");

    interfazGrafica.inventarioContiene("pan")
  })
})