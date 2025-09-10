import { h } from "preact";
import htm from "htm";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "preact/hooks";

const html = htm.bind(h);

const Main = ({ onCreate }) => {
    const [currentView, setCurrentView] = useState('add-task');

    return html`<main id="main">
      <${Sidebar} setView=${setCurrentView} />
      <${Content} view=${currentView} onCreate=${ onCreate } />
    </main>`
}

export default Main;