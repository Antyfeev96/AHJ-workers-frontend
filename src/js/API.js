export default class API {
  async getArticles() {
    this.response = await fetch('http://localhost:7070/articles')
      .then(async (value) => {
        this.articles = await value.json();
      })
      .catch((e) => {
        console.log('API Fail', e);
        return e;
      });
    return this.articles;
  }
}
