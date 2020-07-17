import { render, fireEvent } from "@testing-library/react"
import main from "./main"

describe("Registrar producto en stock", () => {
  it("debe...", async () => {
  
    const app = new ApplicationStock()

    app.registrarEnStock("pan")

    await app.muestraEnStock("pan")
  })  
})

class ApplicationStock {
  constructor() {
    main(this);
  }
  render(tree) {
    this.utils = render(tree);
  }
  registrarEnStock(productoNombre) {
    const input = this.utils.getByLabelText("Nombre de producto:")
    const event = {
      target: {
        value: productoNombre
      }
    }
    fireEvent.change(input, event)
    fireEvent.click(this.utils.getByText("Guardar en stock"))
  }
  async muestraEnStock(productoNombre) {
    await this.utils.findByText(productoNombre)
  }
}