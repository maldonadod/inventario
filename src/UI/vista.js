import React from "react";
import ReactDOM from "react-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {
  Limpio,
  Escribiendo,
  Esperando,
  Error
} from "./ReactComponents";

const container = document.getElementById("input");

function mostrar(tree) {
  ReactDOM.render(
    <Box width="100%">
      <Container>
        <h2>Mi stock</h2>
      </Container>
      <Grid
        container
        direction="row"
        justify="center"
        xs={12}
        sm={6}
        alignItems="center">
        {tree}
      </Grid>
    </Box>
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