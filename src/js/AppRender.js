export default class AppRender {
  constructor() {
    this.body = document.body;
    this.container = document.createElement('div');
    this.container.className = 'container';
  }

  initRender() {
    this.newsEl = document.createElement('div');
    this.newsEl.className = 'news';
    this.newsTitleEl = document.createElement('div');
    this.newsTitleEl.className = 'news__title';
    this.newsTitleEl.textContent = 'Новости мира кино';
    this.newsUpdaterEl = document.createElement('div');
    this.newsUpdaterEl.className = 'news__updater';
    this.newsUpdaterEl.textContent = 'Обновить';
    this.newsArticlesEl = document.createElement('div');
    this.newsArticlesEl.className = 'news__articles';
    this.newsEl.appendChild(this.newsTitleEl, this.newsUpdaterEl, this.newsArticlesEl);
    this.container.appendChild(this.newsEl);
    this.body.appendChild(this.container);
  }
}
