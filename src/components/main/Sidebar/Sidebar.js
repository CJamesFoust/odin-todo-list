import { h } from "preact";
import htm from "htm";

const html = htm.bind(h);

const Sidebar = ({ setView, lists }) => {
    return html`<div class="flex-shrink-0 p-3 bg-white" style="width: 280px" id="sidebar">
        <a
          href=""
          class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
        >
          <svg class="bi me-2" width="30" height="24">
            <use xlink:href="#bootstrap"></use>
          </svg>
          <span class="fs-5 fw-semibold">To-Do</span></a
        >
        <ul class="list-unstyled ps-0">
          <li class="mb-1">
            <button class="btn align-items-center rounded collapsed" onClick=${() => setView('add-task')} >
              Add task
            </button>
          </li>
          <li class="mb-1">
            <button class="btn align-items-center rounded collapsed" onClick=${() => setView('search-task')} >
              Search
            </button>
          </li>
          <li class="mb-1">
            <button class="btn align-items-center rounded collapsed" onClick=${() => setView('todays-tasks')} >
              Today
            </button>
          </li>
          <li class="mb-1">
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#my-lists-collapse"
              aria-expanded="false"
            >
              My lists
            </button>
            <div class="collapse" id="my-lists-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              ${lists.length === 0 ? html`<li><a href="#" class="link-dark rounded" style="pointer-events: none;">No lists created</a></li>` : lists.map((list) => {
                return html`<li key=${list.id}><a href="#" class="link-dark rounded">${list.title}</a></li>`
              })}
              </ul>
            </div>
          </li>
          <li class="border-top my-3"></li>
        </ul>
      </div>`
}

export default Sidebar;