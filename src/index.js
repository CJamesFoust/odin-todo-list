import "./styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createToDoList } from "./todoList";
import { h, render } from "preact";
import App from "./App";


render(h(App), document.querySelector("#root"));
