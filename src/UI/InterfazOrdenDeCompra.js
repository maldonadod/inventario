import React from "react";
import ReactDOM from "react-dom";

const container = document.getElementById("root");

class InterfazOrdenDeCompra {
  mostrarOrdenDeCompra(ordenDeCompra) {
    ReactDOM.render(
      <MiInventario productos={ordenDeCompra.productos} />,
      container
    );
  }
}

function MiInventario({ productos }) {
  const children = productos.map((producto, i) => <li key={i}>{producto}</li>)
  return (
    <ul>{children}</ul>
  )
}

export default InterfazOrdenDeCompra;