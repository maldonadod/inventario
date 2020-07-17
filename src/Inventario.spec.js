import Inventario from "./Inventario";
import ProductoEnStock from "./ProductoEnStock";

describe("Inventario", () => {

  const deposito = {
    guardar: jest.fn()
  }
  const interfazGrafica = {
    agregarAlInventario: jest.fn()
  }

  it("debe guardar producto en deposito e imprimir el nuevo producto", () => {
    const producto = new ProductoEnStock("pan");
  
    const inventario = new Inventario(deposito, interfazGrafica);

    inventario.agregarProducto("pan");

    expect(deposito.guardar).toBeCalledWith(producto);
    expect(interfazGrafica.agregarAlInventario).toBeCalledWith("pan");
  })  
})