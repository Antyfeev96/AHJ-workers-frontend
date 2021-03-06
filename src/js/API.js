export default class API {
  async getArticles() {
    this.response = await fetch('https://ahj-workers-backend.herokuapp.com/articles')
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
