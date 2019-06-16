import axios from "axios";
const url = "https://www.food2fork.com/api/search";
const apiKey = "b373cd9d5ba97a286b260f365526d65e";

export default class Search {
  constructor(query) {
    this.query = query;
    this.result = "";
  }

  async getResults() {
    try {
      const response = await axios.get(`${url}?key=${apiKey}&q=${this.query}`);
      this.result = response.data.recipes;
    } catch (error) {
      alert(error);
    }
  }
}
