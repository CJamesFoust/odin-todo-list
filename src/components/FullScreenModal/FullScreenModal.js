import { h } from "preact";
import htm from "htm";
import { useState } from "preact/hooks";
import { createToDoList } from "../../todoList";

const html = htm.bind(h);

const FullScreenModal = ({ onCreate, onClose }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    const newList = createToDoList(title);
    onCreate(newList);
  };

  return html`<div class="modal-overlay">
    <div class="modal-content max-width px-4 py-4 rounded-3 border border-1">
      <h1 class="mb-5 display-6">Create new list</h1>
      <div class="d-flex flex-column gap-5">
        <div class="col-12">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="listName"
              value=${title}
              onInput=${(e) => setTitle(e.target.value)}
              placeholder=""
            />
            <label for="listName">New list name</label>
          </div>
        </div>
        <div class="modal-btns d-flex gap-3">
          <button onClick=${onClose} class="btn btn-secondary btn-lg btn-modal">
            Cancel
          </button>
          <button
            onClick=${handleSubmit}
            class="btn btn-primary btn-lg btn-modal"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>`;
};

export default FullScreenModal;
