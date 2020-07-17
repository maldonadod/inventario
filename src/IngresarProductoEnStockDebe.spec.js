import IngresarProductoEnStock from "./IngresarProductoEnStock";

describe("IngresarProductoEnStock", () => {
  const inventario = {
    agregarProducto: jest.fn()
  };
  const ingresar = new IngresarProductoEnStock(inventario);
  
  it("debe agregar producto al inventario", () => {

    ingresar.ejecutar("pan");

    expect(inventario.agregarProducto).toBeCalledWith("pan");
  })
})