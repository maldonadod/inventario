import React from "react";
import ReactDOM from "react-dom";

const container = document.getElementById("input");

function Escribiendo({ contenido, escribiendo, ingresar }) {
  return (
    <section>
      <p>Al terminar de escribir presione <i>Ingresar</i></p>
      <input autoFocus value={contenido} onChange={escribiendo} />
      <button onClick={() => ingresar(contenido)}>Ingresar</button>
    </section>
  )
}
function Esperando({ contenido }) {
  return (
    <section>
      <p><i>Esperando...</i></p>
      <input disabled value={contenido} />
      <button disabled>Ingresar</button>
    </section>
  )
}
function Limpio({ contenido = "", escribiendo, ingresar }) {
  return (
    <section>
      <p>Ingrese productos al stock</p>
      <input autoFocus value={contenido} onChange={escribiendo} />
      <button disabled onClick={ingresar}>Ingresar</button>
    </section>
  )
}
function Error({ error, contenido, escribiendo, ingresar }) {
  return (
    <section>
      <p>{error.message}</p>
      <input autoFocus value={contenido} onChange={escribiendo} />
      <button onClick={ingresar}>Ingresar</button>
    </section>
  )
}

function mostrar(tree) {
  ReactDOM.render(
    <section>
      <h2>Mi stock</h2>
      {tree}
    </section>
  , container);
}

const vista = {
  mostrarLimpio(ingresar, escribiendo) {
    mostrar(
      <Limpio
        ingresar={ingresar}
        escribiendo={escribiendo} />
    )
  },
  mostrarEscribiendo(contenido, ingresar, escribiendo) {
    mostrar(
      <Escribiendo
        contenido={contenido}
        ingresar={() => ingresar(contenido)}
        escribiendo={escribiendo} />
    )
  },
  mostrarEsperando(contenido) {
    mostrar(<Esperando contenido={contenido} />)
  },
  mostrarError(error, contenido, ingresar, escribiendo) {
    mostrar(
      <Error
        error={error}
        contenido={contenido}
        ingresar={ingresar}
        escribiendo={escribiendo} />
    )
  }
};

export default vista;