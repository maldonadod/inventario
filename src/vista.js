import React from "react";
import ReactDOM from "react-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

const container = document.getElementById("input");

function Escribiendo({ contenido, escribiendo, ingresar }) {
  return (
    <Container>
      <p>Al terminar de escribir presione <i>Ingresar</i></p>
      <TextField autoFocus value={contenido} onChange={escribiendo} label="Producto" />
      <br />
      <br />
      <Button onClick={() => ingresar(contenido)} color="primary" variant="contained">Ingresar</Button>
    </Container>
  )
}
function Esperando() {
  return (
    <Container>
      <CircularProgress />
    </Container>
  )
}
function Limpio({ escribiendo }) {
  return (
    <Container>
      <p>Ingrese productos al stock</p>
      <TextField autoFocus onChange={escribiendo} label="Producto" />
      <br />
      <br />
      <Button disabled variant="contained">Ingresar</Button>
    </Container>
  )
}
function Error({ error, contenido, escribiendo }) {
  return (
    <Container>
      <TextField
        autoFocus
        error
        helperText={error.message}
        value={contenido}
        onChange={escribiendo}
        label="Producto" />
      <br />
      <br />
      <Button disabled color="primary" variant="contained">Ingresar</Button>
    </Container>
  )
}

function mostrar(tree) {
  ReactDOM.render(
    <Container>
      <h2>Mi stock</h2>
      {tree}
    </Container>
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