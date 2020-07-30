import React from "react";
import ReactDOM from "react-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {
  Inactivo,
  Limpio,
  Escribiendo,
  Esperando,
  Error
} from "./Componentes";

const container = document.getElementById("input");

function mostrar(tree) {
  ReactDOM.render(
    <Box width="100%">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center">
        <Container>{tree}</Container>
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
  mostrarLimpioConExito(ingresar, escribiendo) {
    mostrar(
      <div>
         <Snackbar open>
          <MuiAlert severity="success" elevation={6} variant="filled">
            Agregado!
          </MuiAlert>
        </Snackbar>
        <Inactivo
          escribiendo={escribiendo} />
      </div>
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