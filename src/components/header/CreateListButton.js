import { h } from "preact";
import htm from "htm";

const html = htm.bind(h);

const CreateListButton = ({ onOpenModal }) => {
  return html`<button onClick=${onOpenModal} class="btn btn-primary btn-sm">
    + New List
  </button>`;
};

export default CreateListButton;
