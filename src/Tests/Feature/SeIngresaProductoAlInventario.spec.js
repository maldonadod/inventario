import IngresarProductoEnStock from "../../Controllers/IngresarProductoEnStock";
import Inventario from "../../Domain/Inventario";
import Deposito from "../../Domain/Deposito";

class InterfazGrafica {
  constructor() {
    this.productos = null;
  }
  mostrarProductos(productos) {
    this.productos = productos;
  }
  inventarioContiene(productoNombre) {
    expect(this.productos).toContain(productoNombre);
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