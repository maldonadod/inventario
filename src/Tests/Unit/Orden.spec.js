import Orden from "../../Domain/Orden"

describe("Orden", () => {
  
  let orden, repositorio, interfaz;
  
  beforeEach(() => {
    repositorio = {
      observador: null,
      observar(observador) {
        repositorio.observador = observador;
      },
      notificar(productos) {
        repositorio.observador.ejecutar(productos);
      },
      agregar: jest.fn()
    }
    interfaz = {
      mostrarOrdenDeCompra: jest.fn()
    }
    orden = new Orden(repositorio, interfaz);
  })

  it("debe observar el repositorio de productos y actualizar interfaz cuando este notifica", () => {
    repositorio.notificar(["pan"]);

    expect(orden.productos).toEqual(["pan"]);
    expect(interfaz.mostrarOrdenDeCompra).toBeCalledWith(orden);
  })
  it("debe agregar producto al repositorio", () => {
    orden.agregarProducto("queso")

    expect(repositorio.agregar).toBeCalledWith("queso");
  })
})