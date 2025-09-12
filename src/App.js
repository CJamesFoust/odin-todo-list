import { h } from "preact";
import htm from "htm";
import Header from "header/Header";
import Main from "main/Main";
import FullScreenModal from "./components/FullScreenModal/FullScreenModal";
import { createTask, handleCreateTaskAndAssociations } from "./todoList";
import { useEffect, useState } from "preact/hooks";

const html = htm.bind(h);

const App = () => {
  const [lists, setLists] = useState([
    {
      title: "Do before October",
      id: crypto.randomUUID(),
      taskList: [
        createTask({
          name: "Draft email campaign for fall specials",
          description: "Description for a default task",
          dueDate: "2025-09-11",
          priority: "low",
          completed: false,
          deleted: false,
        }),
        createTask({
          name: "Organize pantry inventory for weekend prep",
          description: "Description for a default task",
          dueDate: "2025-09-11",
          priority: "medium",
          completed: false,
          deleted: false,
        }),
        createTask({
          name: "Update footer links on Ember & Vine site",
          description: "Description for a default task",
          dueDate: "2025-09-11",
          priority: "high",
          completed: false,
          deleted: false,
        })
      ],
    },
    {
      title: "Today's to-do",
      id: crypto.randomUUID(),
      taskList: [
        createTask({
          name: "Draft email campaign for fall specials",
          description: "Description for a default task",
          dueDate: "2025-09-11",
          priority: "low",
          completed: false,
          deleted: false,
        }),
        createTask({
          name: "Organize pantry inventory for weekend prep",
          description: "Description for a default task",
          dueDate: "2025-09-11",
          priority: "medium",
          completed: false,
          deleted: false,
        }),
        createTask({
          name: "Update footer links on Ember & Vine site",
          description: "Description for a default task",
          dueDate: "2025-09-11",
          priority: "high",
          completed: false,
          deleted: false,
        })
      ],
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  const handleCreateList = (newList) => {
    setLists((prev) => [...prev, newList]);
    setShowModal(false);
  };

  useEffect(() => {}, [lists]);

  const handleCreateTask = (taskData) => {
    let task = createTask(taskData);
    handleCreateTaskAndAssociations(taskData, lists, setLists);
  };

  console.log(lists);

  return html` <div id="app">
    ${showModal &&
    html`<${FullScreenModal}
      onCreate=${handleCreateList}
      onClose=${() => setShowModal(false)}
    />`}
    <${Header} onOpenModal=${() => setShowModal(true)} />
    <${Main} onCreate=${handleCreateTask} lists=${lists} />
  </div>`;
};

export default App;
