export default class API {
  async getArticles() {
    this.response = await fetch('http://localhost:7070/articles');

    this.articles = await this.response.json();
    return this.articles;
  }
}
