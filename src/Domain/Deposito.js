class Deposito {
  async guardar(nombreProducto) {
    await new Promise(r => setTimeout(r, 1000))
    if (nombreProducto === "asd") {
      return Promise.reject(new Error("Ocurrio un error!"))
    }
  }
}

export default Deposito;