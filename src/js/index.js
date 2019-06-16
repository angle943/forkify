import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";

/** global state of the app
 * - search object
 * - current recipe object
 * - shopping list object
 * - liked recipes
 */
const state = {};

const constrolSearch = async () => {
  const query = searchView.getInput();

  if (query) {
    state.search = new Search(query);

    // 3) prepare ui for the result
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    // 4) search for recipes
    await state.search.getResults();

    // 5) render results on UI
    clearLoader();
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  constrolSearch();
});
