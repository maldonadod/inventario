import Inventario from "../../Domain/Inventario";

describe("Inventario", () => {

  const deposito = {
    guardar: jest.fn(),
    obtenerTodos: jest.fn()
  }
  const interfazGrafica = {
    mostrarProductos: jest.fn()
  }

  it("debe guardar producto en deposito e imprimir el nuevo producto", async () => {
    deposito.obtenerTodos.mockResolvedValue(["pan"]);
    const inventario = new Inventario(deposito, interfazGrafica);

    await inventario.agregarProducto("pan");

    expect(deposito.guardar).toBeCalledWith("pan");
    expect(interfazGrafica.mostrarProductos).toBeCalledWith(["pan"]);
  })  
})