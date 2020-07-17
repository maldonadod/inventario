import React from "react";
import Stock from "./Stock";
import RepositorioDeProductos from "./RepositorioDeProductos";

function ejecutar(nombreDelProductoAGuardar, interfazDeUsuario) {
  new Stock(memoriaDeProductos, interfazDeUsuario).guardar(nombreDelProductoAGuardar);
}

const memoriaDeProductos = new RepositorioDeProductos();

function App({ ejecutar }) {
  const [nombreDelProductoAGuardar, escribirInput] = React.useState("");
  const [listadoDeProductosEnStock, actualizarListadoProductosEnStock] = React.useState([]);
  const [mensajeDeError, actualizarMensajeDeError] = React.useState(null);
  const interfazDeUsuario = {
    mostrar(productoGuardadoConExito) {
      escribirInput("");
      actualizarListadoProductosEnStock([...listadoDeProductosEnStock, productoGuardadoConExito])
    },
    mostrarError(mensajeError) {
      actualizarMensajeDeError(mensajeError)
    },
  }
  function onChangeInput(e) {
    actualizarMensajeDeError(null);
    escribirInput(e.target.value);
  }
  return (
    <section>
      <button onClick={() => ejecutar(nombreDelProductoAGuardar, interfazDeUsuario)}>Guardar en stock</button>
      <MensajeDeError mensaje={mensajeDeError} />
      <ul>
        {listadoDeProductosEnStock.map((nombreDeProductoEnStock, index) => {
          return (
            <li key={index}>{nombreDeProductoEnStock}</li>
          )
        })}
      </ul>
      <label htmlFor="input-producto-nombre">Nombre de producto:</label>
      <input id="input-producto-nombre" onChange={onChangeInput} value={nombreDelProductoAGuardar} />
    </section>
  )
}
function MensajeDeError({ mensaje }) {
  return mensaje && (
    <p>{mensaje}</p>
  )
}

function main(renderer) {
  renderer.render(<App ejecutar={ejecutar} />)
}

export default main;