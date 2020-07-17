import ReactDOM from "react-dom";
import main from "./main";

class ReactDOMRenderer {
  render(tree) {
    ReactDOM.render(tree, document.getElementById("root"));
  }
}

main(new ReactDOMRenderer());