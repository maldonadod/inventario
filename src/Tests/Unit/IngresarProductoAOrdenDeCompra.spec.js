import IngresarProductoAOrdenDeCompra from "../../Controllers/IngresarProductoAOrdenDeCompra"

describe("IngresarProductoAOrdenDeCompra", () => {
  const orden = {
    agregarProducto: jest.fn()
  }
  it("debe guardar el producto en la orden de compra", () => {
    const ingresar = new IngresarProductoAOrdenDeCompra(orden);
    const peticion = {
      nombre: "pan"
    }
    ingresar.ejecutar(peticion);

    expect(orden.agregarProducto).toBeCalledWith("pan");
  })
})