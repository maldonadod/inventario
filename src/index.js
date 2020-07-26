import IngresarProductoAOrdenDeCompra from "./Controllers/IngresarProductoAOrdenDeCompra";
import InterfazGraficaIngresarProducto from "./UI/InterfazGraficaIngresarProducto";
import Orden from "./Domain/Orden";
import InterfazOrdenDeCompra from "./UI/InterfazOrdenDeCompra";

const interfazGrafica = new InterfazOrdenDeCompra();
const orden = new Orden(interfazGrafica);
const ingresar = new IngresarProductoAOrdenDeCompra(orden);

new InterfazGraficaIngresarProducto(ingresar);
