import axios from "axios";
import { url, apiKey } from "../config";

export default class Search {
  constructor(query) {
    this.query = query;
    this.result = "";
  }

  async getResults() {
    try {
      const response = await axios.get(
        `${url}search?key=${apiKey}&q=${this.query}`
      );
      this.result = response.data.recipes;
    } catch (error) {
      alert(error);
    }
  }
}
