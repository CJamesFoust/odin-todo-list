import { h } from "preact";
import htm from "htm";
import { useState } from "preact/hooks";

const html = htm.bind(h);

const AddTask = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    dueDate: "",
    priority: "low",
    list: "create-new-list",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    onCreate(formData);
    setFormData({
      name: "",
      description: "",
      dueDate: "",
      priority: "low",
      list: "create-new-list",
    });
  };

  return html`<div class="container content my-4" id="addTask">
    <form
      class="px-4 py-3 container-fluid bg-white rounded-3 add-task-form"
      style="max-width: 600px"
    >
      <legend>Add task</legend>
      <div class="row g-2">
        <div class="col-12 row g-1">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="name"
              value=${formData.name}
              onInput=${handleChange}
              placeholder=""
            />
            <label for="floatingInputValue">New task</label>
          </div>
        </div>
        <div class="row col-12 g-1">
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Description of your task"
              value=${formData.description}
              onInput=${handleChange}
              id="description"
              style="height: 125px"
            ></textarea>
            <label for="floatingTextarea2">Description</label>
          </div>
        </div>
        <div class="col-12 row g-1">
          <div class="col-6">
            <div class="form-floating">
              <input
                type="date"
                class="form-control"
                value=${formData.dueDate}
                onInput=${handleChange}
                id="dueDate"
                placeholder=""
              />
              <label for="floatingInputValue">Due date</label>
            </div>
          </div>
          <div class="col-6">
            <div class="form-floating">
              <select
                class="form-select"
                id="priority"
                aria-label="Select task priority"
                value=${formData.priority}
                onInput=${handleChange}
              >
                <option value="low" selected>Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <label for="floatingSelect">Priority</label>
            </div>
          </div>
        </div>
        <div class="col-12 row g-1">
          <div class="col-12">
            <div class="form-floating">
              <select
                class="form-select"
                id="list"
                aria-label="Select list to add task to"
                value=${formData.list}
                onInput=${handleChange}
              >
                <option value="create-new-list" selected>
                  Create new list
                </option>
                <option value="list-1">placeholder list 1</option>
                <option value="list-2">placeholder list 2</option>
              </select>
              <label for="floatingSelect">Add to list</label>
            </div>
          </div>
        </div>
        <div class="col-12 row g-1 my-3">
          <div class="col-12 d-flex flex-row-reverse">
            <button
              type="button"
              class="btn btn-outline-primary"
              id="new-task-create-button"
              onClick=${handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>`;
};

export default AddTask;
