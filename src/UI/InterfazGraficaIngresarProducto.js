import vista from "./vista";

class InterfazGraficaIngresarProducto {
  constructor(ingresarProducto) {
    function escribiendo(e) {
      const contenido = e.target.value;
      if (contenido === "") {
        vista.mostrarLimpio(ingresar, escribiendo);
      } else {
        vista.mostrarEscribiendo(contenido, ingresar, escribiendo);
      }
    }
    async function ingresar(contenido) {
      try {
        vista.mostrarEsperando(contenido);
        const peticion = {
          nombre: contenido
        }
        await ingresarProducto.ejecutar(peticion);
        vista.mostrarLimpio(ingresar, escribiendo);
      } catch (error) {
        vista.mostrarError(error, contenido, ingresar, escribiendo)
      }
    }
    vista.mostrarLimpio(ingresar, escribiendo);
  }
}

export default InterfazGraficaIngresarProducto;