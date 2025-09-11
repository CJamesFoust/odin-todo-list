import { h } from "preact";
import htm from "htm";
import SearchForm from "header/SearchForm";
import CreateListButton from "./CreateListButton";
import NavMenu from "header/NavMenu";
import UserDropdown from "header/UserDropdown";

const html = htm.bind(h);

const Header = ({ onOpenModal }) => {
  return html`<header class="p-3 border-bottom" id="header">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <${NavMenu} />
        <${CreateListButton} onOpenModal=${onOpenModal} />
      </div>
    </div>
  </header>`;
};

export default Header;
