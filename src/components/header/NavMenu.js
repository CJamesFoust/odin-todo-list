import { h } from "preact";
import htm from "htm";

const html = htm.bind(h);

const NavMenu = () => {
  return html`<ul
    class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
  >
    <li>
      <a href="#" class="nav-link px-2 link-body-emphasis logo">
        Hello, User
      </a>
    </li>
  </ul>`;
};

export default NavMenu;
