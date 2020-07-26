const CLAVE = "deposito"

class LocalStorageDeposito {
  async guardar(nombreProducto) {
    const productosString = localStorage.getItem(CLAVE);
    const productos = productosString ? JSON.parse(productosString) : [];
    const productosActualizados = [...productos, nombreProducto];
    localStorage.setItem(CLAVE, JSON.stringify(productosActualizados))
  }
  obtenerTodos() {
    const productosString = localStorage.getItem(CLAVE);
    const productos = productosString ? JSON.parse(productosString) : [];
    return productos;
  }
}

export default LocalStorageDeposito;