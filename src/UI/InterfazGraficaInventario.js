import React from "react";
import ReactDOM from "react-dom";

const container = document.getElementById("root");

class InterfazGrafica {
  mostrarProductos(productos) {
    ReactDOM.render(
      <MiInventario productos={productos} />,
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

export default InterfazGrafica;