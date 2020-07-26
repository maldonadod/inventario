import IngresarProductoEnStock from "./Controllers/IngresarProductoEnStock";
import Inventario from "./Domain/Inventario";
import Deposito from "./Domain/Deposito";
import InterfazGraficaInventario from "./UI/InterfazGraficaInventario";
import InterfazGraficaIngresarProducto from "./UI/InterfazGraficaIngresarProducto";

const interfazGrafica = new InterfazGraficaInventario();
const deposito = new Deposito();
const inventario = new Inventario(deposito, interfazGrafica);
const ingresar = new IngresarProductoEnStock(inventario);

new InterfazGraficaIngresarProducto(ingresar);

inventario.presentarInventario();