import IngresarProductoEnStock from "./IngresarProductoEnStock";
import Inventario from "./Inventario";
import Deposito from "./Deposito";

describe("IngresarProductoEnStock", () => {
  const interfazGrafica = {
    agregarAlInventario: jest.fn()
  };
  const deposito = new Deposito();
  const inventario = new Inventario(deposito, interfazGrafica);
  const ingresar = new IngresarProductoEnStock(inventario);
  it("debe guardar pan en el deposito y actualizar el inventario", () => {
    ingresar.ejecutar("pan");

    expect(interfazGrafica.agregarAlInventario).toBeCalledWith("pan");
  })
})