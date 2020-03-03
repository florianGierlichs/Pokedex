import "./app.scss";
import { createElement } from "./lib/dom";
import { title } from "./components/title";
import { search } from "./components/search";

export function app() {
  const header = createElement("header", {
    className: "header"
  });
  const main = createElement("main", {
    className: "main"
  });
  const titleElement = title("Pokedex");
  const searchElement = search();

  const searchOutput = createElement("div", {
    className: "searchOutput"
  });

  header.appendChild(titleElement);
  main.appendChild(searchElement);
  main.appendChild(searchOutput);

  searchElement.addEventListener("search", () => {
    searchOutput.innerText = searchElement.value;
  });

  return [header, main];
}
