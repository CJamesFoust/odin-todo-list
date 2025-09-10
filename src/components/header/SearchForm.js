import { h } from "preact";
import htm from "htm";

const html = htm.bind(h);

const SearchForm = () => {
    return html`<form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            class="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>`
}

export default SearchForm;