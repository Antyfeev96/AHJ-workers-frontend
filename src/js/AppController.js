export default class AppController {
  constructor(layout, api) {
    this.layout = layout;
    this.api = api;
  }

  init() {
    this.layout.initRender();
  }

  async renderArticle() {
    await this.getArticles();
    for (const article of this.articles) {
      this.layout.renderArticle(article.received, article.image, article.description);
    }
  }

  async getArticles() {
    this.data = await this.api.getArticles();
    this.articles = await this.data.articles;
    return this.articles;
  }
}
