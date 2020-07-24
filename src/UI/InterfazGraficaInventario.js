import React from "react";
import ReactDOM from "react-dom";

class InterfazGrafica {
  constructor() {
    this.lista = [];
  }
  agregarAlInventario(nombreDelProducto) {
    this.lista.push(nombreDelProducto);
    const container = document.getElementById("root");
    ReactDOM.render(
      <MiInventario productos={this.lista} />,
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