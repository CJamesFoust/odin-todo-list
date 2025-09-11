import { h, Fragment } from "preact";
import htm from "htm";
import AddTask from "../AddTask/AddTask";

const html = htm.bind(h);

const Content = ({ view, onCreate, lists }) => {
    
    return html`
    <${Fragment}>
        ${view === 'add-task' && html`<${AddTask} onCreate=${ onCreate } lists=${ lists } />`}
        ${view === 'search-task' && html`<div>Search Tasks</div>`}
        ${view === 'todays-tasks' && html`<div>Todays Tasks</div>`}
    </${Fragment}>
     `
}

export default Content;