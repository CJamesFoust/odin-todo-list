import { Fragment, h } from "preact";
import htm from "htm";
import { useEffect, useRef, useState } from "preact/hooks";

const html = htm.bind(h);

const AddTask = ({ lists }) => {
  return html`<div
    id="lists"
    class="container overflow-auto bg-white my-4 px-5 py-4 rounded-4 d-flex flex-column gap-5"
  >
    <h1 class="display-6 mb-2">All lists</h1>
    ${lists.map((list) => {
      return html`<div class="border-bottom list-container pb-4" key=${list.id}>
        <div class="chevron-title d-flex align-items-center mb-4 gap-3">
          <a
            data-bs-toggle="collapse"
            href="#${list.id}"
            role="button"
            aria-expanded="true"
            aria-controls="${list.id}"
            onClick=${(e) => e.target.classList.toggle('test')}
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-double-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
              /></svg
          ></a>
          <h6 class="m-0">${list.title}</h6>
        </div>
        <div class="d-flex flex-column gap-5 collapse show" id=${list.id}>
          ${list.taskList.map((task) => {
            return html`<div class="task-container px-5">
              <div>
                <div class="form-check d-flex">
                  <div>
                    <input
                      class="form-check-input priority-${task.priority}"
                      type="checkbox"
                      id="priority-checkbox-${task.id}"
                      value=""
                      aria-label="Priority checkbox for task: ${task.name}"
                    />
                  </div>
                  <span>${task.name}</span>
                </div>
                <div class="d-flex px-4 small">
                  <div>
                    ${new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(new Date(task.dueDate))}
                  </div>
                </div>
              </div>
              <p class="hide">${task.description}</p>
            </div>`;
          })}
        </div>
      </div>`;
    })}
  </div>`;
};

export default AddTask;
