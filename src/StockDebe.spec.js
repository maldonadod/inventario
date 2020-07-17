import Stock from "./Stock";

describe("Stock Debe", () => {
  let memoriaDeProductos, interfazDeUsuario, stock;
  
  beforeEach(() => {
    memoriaDeProductos = {
      guardarEnStock: jest.fn()
    }
    interfazDeUsuario = {
      mostrar: jest.fn(),
      mostrarError: jest.fn()
    }
    stock = new Stock(memoriaDeProductos, interfazDeUsuario);
  })

  it("debe guardar el producto y presentarse", async () => {
    await stock.guardar("pan");

    expect(memoriaDeProductos.guardarEnStock).toBeCalledWith("pan");
    expect(interfazDeUsuario.mostrar).toBeCalledWith("pan");
  });
  it("debe presentar error al guardar", async () => {
    memoriaDeProductos.guardarEnStock.mockRejectedValue(new Error("Algun error"));
    
    await stock.guardar("pan");

    expect(interfazDeUsuario.mostrarError).toBeCalledWith("Algun error");
  });
});