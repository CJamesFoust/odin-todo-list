import { h } from "preact";
import htm from "htm";
import Header from "header/Header";
import Main from "main/Main";
import FullScreenModal from "./components/FullScreenModal/FullScreenModal";
import { createTask, handleCreateTaskAndAssociations } from "./todoList";
import { useEffect, useState } from "preact/hooks";

const html = htm.bind(h);

const App = () => {
    const [ lists, setLists ] = useState([]);
    const [ showModal, setShowModal ] = useState(false);

    const handleCreateList = (newList) => {
      setLists(prev => [...prev, newList]);
      setShowModal(false)
    }

    useEffect(() => {

    }, [lists])

    const handleCreateTask = (taskData) => {
        let task = createTask(taskData);
        handleCreateTaskAndAssociations(taskData, lists, setLists);
    };

  return html` <div id="app">
    ${showModal && (html`<${FullScreenModal} onCreate=${handleCreateList} onClose=${() => setShowModal(false)} />`)}
    <${Header} onOpenModal=${() => setShowModal(true)} />
    <${Main} onCreate=${ handleCreateTask} lists=${ lists } />
  </div>`;
};

export default App;
