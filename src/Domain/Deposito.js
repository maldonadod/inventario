class LocalStorageDeposito {
  async guardar(nombreProducto) {
    const productos = await this.obtenerTodos();
    await put([...productos, nombreProducto]);
  }
  async obtenerTodos() {
    const productos = await get();
    return productos;
  }
}

function put(productos) {
  return fetch("https://inventarius-20ba9.firebaseio.com/productos.json", {
    method: "PUT",
    body: JSON.stringify(productos),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
}
function get() {
  return fetch("https://inventarius-20ba9.firebaseio.com/productos.json")
    .then(res => res.json())
}

export default LocalStorageDeposito;