const CLAVE = "mi-stock"

class RepositorioDeProductos {
  guardarEnStock(nombreDelProductoAGuardar) {
    if (nombreDelProductoAGuardar === "asd") {
      throw new Error("un errorcito...")
    }
    const productosGuardadosComoTexto = localStorage.getItem(CLAVE);
    if (productosGuardadosComoTexto) {
      const productosGuardadosJSON = JSON.parse(productosGuardadosComoTexto);
      productosGuardadosJSON.push(nombreDelProductoAGuardar);
      localStorage.setItem(CLAVE, JSON.stringify(productosGuardadosJSON))
    } else {
      localStorage.setItem(CLAVE, JSON.stringify([nombreDelProductoAGuardar]))
    }
  }
}

export default RepositorioDeProductos;