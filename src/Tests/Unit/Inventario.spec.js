import Inventario from "../../Domain/Inventario";

describe("Inventario", () => {

  const deposito = {
    guardar: jest.fn()
  }
  const interfazGrafica = {
    agregarAlInventario: jest.fn()
  }

  it("debe guardar producto en deposito e imprimir el nuevo producto", async () => {
    const inventario = new Inventario(deposito, interfazGrafica);

    await inventario.agregarProducto("pan");

    expect(deposito.guardar).toBeCalledWith("pan");
    expect(interfazGrafica.agregarAlInventario).toBeCalledWith("pan");
  })  
})