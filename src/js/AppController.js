export default class AppController {
  constructor(layout, api) {
    this.layout = layout;
    this.api = api;
  }

  init() {
    this.layout.loadingRender();
    this.articlesEl = document.querySelector('.news__articles');
  }

  async renderArticle() {
    await this.getArticles();
    if (!this.articles) {
      this.layout.renderError();
      return;
    }
    for (const article of this.articles) {
      this.layout.renderArticle(article.received, article.image, article.description);
    }
  }

  async getArticles() {
    await this.api.getArticles().then((data) => {
      this.articles = data.articles;
      while (this.articlesEl.firstChild) {
        this.articlesEl.firstChild.remove();
      }
    });
    return this.articles;
  }
}
