export default class AppRender {
  constructor(img) {
    this.body = document.body;
    this.container = document.createElement('div');
    this.container.className = 'container';
    this.icon = img;
  }

  initRender() {
    while (this.body.firstChild) {
      this.body.firstChild.remove();
    }
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
    this.newsEl.append(this.newsTitleEl, this.newsUpdaterEl, this.newsArticlesEl);
    this.container.append(this.newsEl);
    this.body.append(this.container);
  }

  renderLayout() {
    this.a = 123;
    console.log(this.a);
  }

  renderArticle(timestamp, image, description) {
    this.articleEl = document.createElement('div');
    this.articleEl.className = 'article';
    this.timestampEl = document.createElement('div');
    this.timestampEl.className = 'article__timestamp';
    this.timestampEl.textContent = timestamp;
    this.descriptionEl = document.createElement('div');
    this.descriptionEl.className = 'article__description';
    this.descriptionEl.textContent = description;
    this.imageEl = document.createElement('img');
    this.imageEl.src = image;
    this.imageEl.className = 'article__image';
    this.imageEl.style.width = `${75}px`;
    this.imageEl.style.height = `${75}px`;
    this.articleEl.append(this.timestampEl, this.imageEl, this.descriptionEl);
    this.newsArticlesEl.append(this.articleEl);
  }
}
