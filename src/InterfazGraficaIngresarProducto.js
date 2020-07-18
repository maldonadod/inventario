import React from "react";
import ReactDOM from "react-dom";

class InterfazGraficaIngresarProducto {
  constructor(ingresar) {
    function handler(nombreDelProducto) {
      ingresar.ejecutar(nombreDelProducto)
    }
    ReactDOM.render(
      <InputInventario
        handler={handler} />,
      document.getElementById("input")
    );
  }
}

function InputInventario({ handler }) {
  const [value, setValue] = React.useState("");
  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <section>
      <input value={value} onChange={onChange} />
      <button onClick={() => handler(value)}>Ingresar</button>
    </section>
  )
}

export default InterfazGraficaIngresarProducto;