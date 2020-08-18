import React from "react";
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

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
          <Accordion>
            <AccordionSummary>
              <span>Orden de compra ({productos.length})</span>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableBody>
                    {productos.map(producto => (
                      <TableRow key={producto}>
                        <TableCell component="td" scope="row">
                          {producto}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Grid>
    </Box>
  );
}

export default InterfazOrdenDeCompra;