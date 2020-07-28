import React from "react";
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
    <section style={{ padding: "10px", paddingBottom: "50px" }}>
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
    </section>
  );
}

export default InterfazOrdenDeCompra;