class Deposito {
  async guardar(nombreProducto) {
    await new Promise(r => setTimeout(r, 1000))
    if (!nombreProducto) {
      return Promise.reject(new Error("No puede ingresar un producto sin nombre!"))
    }
  }
}

export default Deposito;