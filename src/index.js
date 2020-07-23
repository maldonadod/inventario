import IngresarProductoEnStock from "./IngresarProductoEnStock";
import Inventario from "./Inventario";
import Deposito from "./Deposito";
import InterfazGraficaInventario from "./InterfazGraficaInventario";
import InterfazGraficaIngresarProducto from "./InterfazGraficaIngresarProducto";

const interfazGrafica = new InterfazGraficaInventario();
const deposito = new Deposito();
const inventario = new Inventario(deposito, interfazGrafica);
const ingresar = new IngresarProductoEnStock(inventario);

new InterfazGraficaIngresarProducto(ingresar);