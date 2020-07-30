import React from "react";
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const container = document.getElementById("root");

class InterfazOrdenDeCompra {
  mostrarOrdenDeCompra(ordenDeCompra) {
    ReactDOM.render(
      <OrdenDeCompra productos={ordenDeCompra.productos} />,
      container
    );
  }
}

function OrdenDeCompra({ productos }) {
  return (
    <Box width="100%" style={{ paddingTop: "30px" }}>
      <Grid
        container
        direction="row"
        alignItems="center">
        <Container>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Orden de compra ({productos.length})</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productos.map(producto => (
                  <TableRow key={producto}>
                    <TableCell component="th" scope="row">
                      {producto}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Grid>
    </Box>
  );
}

export default InterfazOrdenDeCompra;