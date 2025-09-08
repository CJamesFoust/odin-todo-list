import "./styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createToDoList } from "./todoList";

const testToDo = createToDoList(
  "This is a title",
  "This is a description",
  new Date("2024-09-01"),
  "High",
  ["test", "test 2", "test 3"]
);
