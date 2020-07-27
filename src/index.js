import IngresarProductoAOrdenDeCompra from "./Controllers/IngresarProductoAOrdenDeCompra";
import InterfazGraficaIngresarProducto from "./Domain/InterfazGraficaIngresarProducto";
import Orden from "./Domain/Orden";
import InterfazOrdenDeCompra from "./UI/InterfazOrdenDeCompra";
import FireBaseProductosDeOrdenDeCompraRepositorio from "./Domain/FireBaseProductosDeOrdenDeCompraRepositorio";

const interfazGrafica = new InterfazOrdenDeCompra();
const repositorio = new FireBaseProductosDeOrdenDeCompraRepositorio();
const orden = new Orden(repositorio, interfazGrafica);

const ingresar = new IngresarProductoAOrdenDeCompra(orden);

new InterfazGraficaIngresarProducto(ingresar);
