import ReactDOM from "react-dom";

class ReactDOMRenderer {
  render(tree) {
    ReactDOM.render(tree, document.getElementById("root"));
  }
}

new ReactDOMRenderer().render("hola");