// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA9-7At7szpD9kVvepw3UxgQBjaR-wjuJk",
  authDomain: "inventarius-20ba9.firebaseapp.com",
  databaseURL: "https://inventarius-20ba9.firebaseio.com",
  projectId: "inventarius-20ba9",
  storageBucket: "inventarius-20ba9.appspot.com",
  messagingSenderId: "211057835569",
  appId: "1:211057835569:web:7f97b6bc04c1da3bce1f10",
  measurementId: "G-PYDXF0889M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class Orden {
  constructor(interfaz) {
    this.interfazGrafica = interfaz;
    this.productos = [];
    firebase
      .database()
      .ref("productos")
      .on("value", (snapshot) => {
        const productos = snapshot.val();
        this.productos = Object.values(productos);
        this.interfazGrafica.mostrarOrdenDeCompra(this);
      })
  }
  agregarProducto(nombreProducto) {
    firebase
      .database()
      .ref("productos")
      .push()
      .set(nombreProducto)
  }
}

export default Orden