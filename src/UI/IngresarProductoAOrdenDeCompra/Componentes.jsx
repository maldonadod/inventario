import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

function Escribiendo({ contenido, escribiendo, ingresar }) {
  return (
    <Container>
      <p>Al terminar de escribir presione <i>Ingresar</i></p>
      <TextField fullWidth autoFocus value={contenido} onChange={escribiendo} label="Producto" />
      <br />
      <br />
      <Button onClick={() => ingresar(contenido)} color="primary" variant="contained">Ingresar</Button>
    </Container>
  )
}
function Esperando() {
  return (
    <CircularProgress />
  )
}
function Limpio({ escribiendo }) {
  return (
    <Container>
      <p>Ingrese productos para comprar</p>
      <TextField fullWidth autoFocus onChange={escribiendo} label="Producto" />
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
        fullWidth
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

export {
  Limpio,
  Escribiendo,
  Esperando,
  Error
}