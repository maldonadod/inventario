import VistasDeIngresarProducto from "../UI/IngresarProductoAOrdenDeCompra";

class InterfazGraficaIngresarProducto {
  constructor(ingresarProducto) {
    function escribiendo(e) {
      const contenido = e.target.value;
      if (contenido === "") {
        VistasDeIngresarProducto.mostrarLimpio(ingresar, escribiendo);
      } else {
        VistasDeIngresarProducto.mostrarEscribiendo(contenido, ingresar, escribiendo);
      }
    }
    async function ingresar(contenido) {
      try {
        VistasDeIngresarProducto.mostrarEsperando(contenido);
        const peticion = {
          nombre: contenido
        }
        await ingresarProducto.ejecutar(peticion);
        VistasDeIngresarProducto.mostrarLimpio(ingresar, escribiendo);
      } catch (error) {
        VistasDeIngresarProducto.mostrarError(error, contenido, ingresar, escribiendo)
      }
    }
    VistasDeIngresarProducto.mostrarLimpio(ingresar, escribiendo);
  }
}

export default InterfazGraficaIngresarProducto;