import { h } from "preact";
import htm from "htm";
import Header from "header/Header";
import Main from "main/Main";

const html = htm.bind(h);

const App = () => {
    const handleCreateTask = (taskData) => {
        console.log(`Task create: `, taskData);
    };

  return html` <div id="app">
    <${Header} />
    <${Main} onCreate=${ handleCreateTask} />
  </div>`;
};

export default App;
